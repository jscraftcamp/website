import React from "react"

import NotFound from "./DEPRECATED_pages/404"
import HelpPullRequest from "./DEPRECATED_pages/HelpPullRequest"
import Imprint from "./DEPRECATED_pages/imprint"
import PrivacyPolicy from "./DEPRECATED_pages/privacypolicy"
import Register from "./DEPRECATED_pages/registration"
import Sponsoring from "./DEPRECATED_pages/sponsoring"
import TheTeam from "./DEPRECATED_pages/theteam"

export default {
  title: "Pages|old",
}

export const NotFoundPage = () => <NotFound />
export const HelpPullRequestPage = () => <HelpPullRequest />
export const ImprintPage = () => <Imprint />
export const PrivacyPolicyPage = () => <PrivacyPolicy />
export const RegisterPage = () => <Register />
export const SponsoringPage = () => <Sponsoring />
export const TheTeamPage = () => <TheTeam />
