import React from "react"

import Imprint from "./pages/imprint"
import Index from "./pages"
import NotFound from "./pages/404"
import Register from "./pages/register.js"
import TheTeam from "./pages/theteam"
import Values  from "./pages/values";


export default {
  title: 'Pages/main',
}

export const ImprintPage = () => <Imprint />
export const IndexPage = () => <Index />
export const NotFoundPage = () => <NotFound />
export const RegisterPage = () => <Register />
export const TheTeamPage = () => <TheTeam />
export const ValuesPage = () => <Values />
