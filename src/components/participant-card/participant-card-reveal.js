import React from "react"

const ParticipantCardReveal = ({
  active,
  name,
  contribution,
  connection,
  onClick,
}) => (
  <div className="card-reveal">
    <button class="card-title grey-text text-darken-4" onClick={onClick}>
      {name}
    </button>
    <p>{contribution}</p>
    <p>{connection}</p>
  </div>
)

export default ParticipantCardReveal
