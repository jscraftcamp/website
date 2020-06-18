import React from "react"

import Index from "./pages"
import Register from "./pages/register.js"
import Values  from "./pages/values";


export default {
  title: "Pages|main",
}

export const IndexPage = () => <Index />
export const RegisterPage = () => <Register />
export const ValuesPage = () => <Values />
