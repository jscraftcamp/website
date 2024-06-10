<script lang="ts">
    import Box from '$lib/layout/Box.svelte';
    import linkedinLogo from '$lib/participants/linkedin.svg';

    export let email: string = '';
    export let linkedin: string | undefined = undefined;
    export let image: string | undefined = undefined;
    export let name: string;
</script>

<Box>
    <div class="member">
        <div class="image">
            {#if image}
                <img src={image} alt={name}/>
            {:else}
                <span>🧑‍💻</span>
            {/if}
        </div>
        <div class="infos">
            <strong class="name-with-logo">
                {name}
                {#if linkedin}
                    <a
                            href={linkedin}
                            rel="external"
                            class="linkedin-link"
                            title="Link to {name} on LinkedIn"
                    >
                        <img src={linkedinLogo} height="32" width="32" alt="Link to {name} on LinkedIn"/>
                    </a>
                {/if}
            </strong>
            {#if email}
                <a href="mailto:{email}" title={email}>{email}</a>
            {:else}
                <span>&nbsp;</span>
            {/if}
        </div>
    </div>
</Box>

<style>
    .member {
        display: flex;
        flex-flow: column;
        height: 100%;
    }

    .infos {
        display: flex;
        flex-flow: column;
        padding: 1em;
    }

    .name-with-logo {
        display: flex;
        align-items: center;
    }

    .linkedin-link {
        margin-left: 0.5em;
    }

    a {
        max-width: 13em;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .image {
        display: grid;
        width: 15em;
        height: 15em;
        overflow: hidden;
    }
    .image:has(span){
        place-content: center;
    }
    .image > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
