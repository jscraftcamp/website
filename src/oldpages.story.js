import React from "react"

import Imprint from "./DEPRECATED_pages/imprint"
import TheTeam from "./DEPRECATED_pages/theteam"
import NotFound from "./DEPRECATED_pages/404"
import PrivacyPolicy from "./DEPRECATED_pages/privacypolicy"
import Register from "./DEPRECATED_pages/registration"
import Values from "./DEPRECATED_pages/values"

export default {
  title: "Pages|old",
}

export const ImprintPage = () => <Imprint />
export const TheTeamPage = () => <TheTeam />
export const NotFoundPage = () => <NotFound />
export const PrivacyPolicyPage = () => <PrivacyPolicy />
export const RegisterPage = () => <Register />
export const ValuesPage = () => <Values />
