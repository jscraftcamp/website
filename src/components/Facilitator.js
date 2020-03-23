import React from "react"

import { baseColor } from "../_data.json"

const Facilitator = () => (
  <div className="row">
    <h4 className={`header center ${baseColor}-text`}>Facilitation by</h4>
    <h5 className="header center">
      Tobias Goeschel (
      <a href="https://twitter.com/w3ltraumpirat">@w3ltraumpirat</a>)
    </h5>
  </div>
)

Facilitator.displayName = "Facilitator"
export default Facilitator
