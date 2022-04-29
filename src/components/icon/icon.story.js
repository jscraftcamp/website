import React from "react"
import Icon from "./"
import Logo from "../../assets/images/logo.svg"

export default {
  title: "Components/Icon",
  component: Icon,
}

export const base = () => (
  <div style={{ width: 200 }}>
    <Icon source={Logo} />
  </div>
)
