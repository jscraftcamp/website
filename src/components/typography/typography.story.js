import React from "react"
import Typography from "./"

export default {
  title: "components|Typography",
  component: Typography,
}

export const base = () => <Typography>Hello World</Typography>
export const h1 = () => <Typography component="h1">JSCraftCamp</Typography>
export const subline = () => (
  <Typography variant="subline">JSCraftCamp</Typography>
)
export const logo = () => <Typography variant="logo">JSCraftCamp</Typography>
