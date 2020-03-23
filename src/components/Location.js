import React from "react"

import { baseColor } from "../_data.json"

const Location = () => (
  <>
    <h4 className={`header center ${baseColor}-text`}>Location</h4>
    <h5 className="header center">
      <a href="https://goo.gl/maps/TCXpX3Y4mkC5xKdr7">
        codecentric AG
        <br />
        August-Everding-Str. 20
        <br />
        81671 München
        <br />
      </a>
    </h5>
  </>
)

Location.displayName = "Location"
export default Location
