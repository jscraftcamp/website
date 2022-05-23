import React from "react"

const ParticipantCardTitle = ({ name, twitter, onClick }) => (
  <div
    className="card-title"
    // style={{
    //   height: "4.5em",
    //   overflow: "hidden",
    //   wordWrap: "normal",
    // }}
  >
    <button
      class="card-title activator grey-text text-darken-4"
      onClick={onClick}
    >
      {name}
    </button>
    {twitter && (
      <p>
        <a
          className="twitter-link"
          href={"https://twitter.com/" + twitter}
          target="_blank"
          rel="noreferrer noopener"
        >
          @{twitter}
        </a>
      </p>
    )}
  </div>
)

export default ParticipantCardTitle
