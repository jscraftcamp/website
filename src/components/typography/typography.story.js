import React from "react"
import Typography from "."

export default {
  title: "components/Typography",
  component: Typography,
  args: {
    children: "Hello World",
  },
}

export const base = { args: {} }

// main: components

export const h1 = {
  args: {
    component: "h1",
  },
}

export const h1_subline = {
  args: {
    component: "h1",
    variant: "subline",
  },
}
export const h2 = {
  args: {
    component: "h2",
  },
}
export const h2UppercaseWide = {
  args: {
    component: "h2",
    variants: ["uppercase", "wide"],
  },
}
export const h2_subline = {
  args: {
    component: "h2",
    variant: "subline",
  },
}

// more components
export const p = {
  args: {
    component: "p",
  },
}

export const paragraph = {
  args: {
    paragraph: true,
  },
}

// more variants
export const inverted = {
  args: {
    variant: "inverted",
  },
}

export const noselect = {
  args: {
    variant: "noselect",
  },
}

// only for main JSCraftcamp "logo"
export const poppins = {
  args: {
    variant: "poppins",
  },
}
export const nounderline = {
  args: {
    variant: "nounderline",
  },
}
export const small = {
  args: {
    variant: "small",
  },
}
export const link = {
  args: {
    variant: "link",
  },
}
