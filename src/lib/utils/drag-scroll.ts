/**
 * Svelte action: drag-to-scroll with momentum for infinite-scrolling elements.
 *
 * Lifecycle:  CSS animation ──► drag (frozen) ──► throw (momentum) ──► 1 s pause ──► CSS animation
 *
 * Expects the element to use duplicated content (first half = second half)
 * and one of the CSS classes `animate-scroll-left` or `animate-scroll-right`.
 * The animation duration is read from `data-duration` (seconds).
 */

// ── constants ──────────────────────────────────────────────────────

const FRICTION = 0.95; // multiplied each frame — closer to 1 = longer slide
const STOP_THRESHOLD = 0.5; // px per frame — below this the throw is done
const RESUME_DELAY = 1000; // ms to wait after throw before auto-scroll resumes
const DRAG_THRESHOLD = 4; // px of movement before a click becomes a drag
const MS_PER_FRAME = 16.67; // ≈ 60 fps

// ── geometry helpers ───────────────────────────────────────────────

/** Read the element's current translateX (works with CSS animations and inline transforms). */
function readTranslateX(el: HTMLElement): number {
	return new DOMMatrix(getComputedStyle(el).transform).m41;
}

/** Width of one copy of the duplicated content (= half the element). */
function oneLoopWidth(el: HTMLElement): number {
	return el.offsetWidth / 2;
}

/**
 * Keep `x` inside one loop period: [−loopWidth, 0).
 * Prevents visible jumps at the seam of the duplicated content.
 */
function wrapX(el: HTMLElement, x: number): number {
	const w = oneLoopWidth(el);
	if (w <= 0) return x;
	return (((x % w) + w) % w) - w;
}

// ── the action ─────────────────────────────────────────────────────

export function dragScroll(node: HTMLElement) {
	// state
	let isDragging = false;
	let hasMoved = false;
	let frozen = false;
	let startX = 0;
	let anchorX = 0;
	let resumeTimer: ReturnType<typeof setTimeout> | null = null;
	let momentumRaf: number | null = null;

	// velocity tracking (last two pointer positions)
	let prevPointerX = 0;
	let prevPointerTime = 0;
	let lastPointerX = 0;
	let lastPointerTime = 0;

	// ── timers / animation management ──────────────────────────────

	function clearTimer() {
		if (resumeTimer !== null) {
			clearTimeout(resumeTimer);
			resumeTimer = null;
		}
	}

	function stopMomentum() {
		if (momentumRaf !== null) {
			cancelAnimationFrame(momentumRaf);
			momentumRaf = null;
		}
	}

	function stopEverything() {
		clearTimer();
		stopMomentum();
	}

	// ── freeze / resume CSS animation ──────────────────────────────

	/** Freeze the CSS animation and take manual control. Returns the frozen position. */
	function freeze(): number {
		const x = readTranslateX(node);
		frozen = true;
		node.style.animation = 'none';
		node.style.transform = `translateX(${x}px)`;
		return x;
	}

	/** Hand control back to the CSS animation, continuing from the current position. */
	function resumeAutoScroll() {
		resumeTimer = null;

		const x = readTranslateX(node);
		const w = oneLoopWidth(node);
		const isLeft = node.classList.contains('animate-scroll-left');
		const duration = parseFloat(node.dataset.duration || '25');

		// How far through one loop is the current position? (0 → 1)
		//   scroll-left  moves  0 → −w   →  progress = −x / w
		//   scroll-right moves −w →  0   →  progress = (w + x) / w
		const progress = isLeft ? -x / w : (w + x) / w;
		const normalised = ((progress % 1) + 1) % 1;

		// A negative delay = "start this many seconds in" → seeks the animation
		const seekSeconds = -(normalised * duration);
		const animName = isLeft ? 'scroll-left' : 'scroll-right';

		frozen = false;
		node.style.removeProperty('transform');
		node.style.animation = `${animName} ${duration}s linear ${seekSeconds}s infinite`;
	}

	// ── momentum (throw) ───────────────────────────────────────────

	function startThrow(pixelsPerFrame: number) {
		let speed = pixelsPerFrame;
		let x = readTranslateX(node);

		function tick() {
			speed *= FRICTION;

			if (Math.abs(speed) < STOP_THRESHOLD) {
				momentumRaf = null;
				resumeTimer = setTimeout(resumeAutoScroll, RESUME_DELAY);
				return;
			}

			x = wrapX(node, x + speed);
			node.style.transform = `translateX(${x}px)`;
			momentumRaf = requestAnimationFrame(tick);
		}

		momentumRaf = requestAnimationFrame(tick);
	}

	// ── pointer events ─────────────────────────────────────────────

	function onPointerDown(e: PointerEvent) {
		if (e.button !== 0) return;
		stopEverything();
		isDragging = true;
		hasMoved = false;
		startX = e.clientX;
		prevPointerX = lastPointerX = e.clientX;
		prevPointerTime = lastPointerTime = performance.now();
	}

	function onPointerMove(e: PointerEvent) {
		if (!isDragging) return;

		if (!hasMoved) {
			if (Math.abs(e.clientX - startX) < DRAG_THRESHOLD) return;

			hasMoved = true;
			node.setPointerCapture(e.pointerId);

			// Snapshot position *now* (the CSS animation kept moving since pointerdown)
			anchorX = freeze();
			startX = e.clientX;

			document.body.style.userSelect = 'none';
			node.style.cursor = 'grabbing';
		}

		// Track the two most recent positions for velocity
		prevPointerX = lastPointerX;
		prevPointerTime = lastPointerTime;
		lastPointerX = e.clientX;
		lastPointerTime = performance.now();

		const dragDelta = e.clientX - startX;
		node.style.transform = `translateX(${wrapX(node, anchorX + dragDelta)}px)`;
	}

	function onPointerUp() {
		if (!isDragging) return;
		isDragging = false;
		document.body.style.removeProperty('user-select');
		node.style.removeProperty('cursor');

		if (!hasMoved) {
			// Just a click — if we interrupted a throw / pause, resume scrolling
			if (frozen) resumeAutoScroll();
			return;
		}

		// Convert pointer velocity from px/ms to px/frame
		const dt = lastPointerTime - prevPointerTime;
		const dx = lastPointerX - prevPointerX;
		const pixelsPerFrame = dt > 0 ? (dx / dt) * MS_PER_FRAME : 0;

		if (Math.abs(pixelsPerFrame) > STOP_THRESHOLD) {
			startThrow(pixelsPerFrame);
		} else {
			resumeTimer = setTimeout(resumeAutoScroll, RESUME_DELAY);
		}
	}

	/** Block link navigation when the gesture was a drag, not a click. */
	function onClick(e: MouseEvent) {
		if (hasMoved) {
			e.preventDefault();
			e.stopPropagation();
			hasMoved = false;
		}
	}

	/** Prevent the browser's native drag on links / images. */
	function onDragStart(e: DragEvent) {
		e.preventDefault();
	}

	// ── bind / unbind ──────────────────────────────────────────────

	node.addEventListener('pointerdown', onPointerDown);
	node.addEventListener('pointermove', onPointerMove);
	node.addEventListener('pointerup', onPointerUp);
	node.addEventListener('pointercancel', onPointerUp);
	node.addEventListener('click', onClick, true);
	node.addEventListener('dragstart', onDragStart);

	return {
		destroy() {
			stopEverything();
			node.removeEventListener('pointerdown', onPointerDown);
			node.removeEventListener('pointermove', onPointerMove);
			node.removeEventListener('pointerup', onPointerUp);
			node.removeEventListener('pointercancel', onPointerUp);
			node.removeEventListener('click', onClick, true);
			node.removeEventListener('dragstart', onDragStart);
		}
	};
}
