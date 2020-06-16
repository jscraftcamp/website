import React from "react"

import Index from "./pages"
import Imprint from "./pages/imprint"
import TheTeam from "./pages/theteam"
import NotFound from "./pages/404"
import PrivacyPolicy from "./pages/privacypolicy"

export default {
  title: "Pages|main",
}

export const IndexPage = () => <Index />
export const ImprintPage = () => <Imprint />
export const TheTeamPage = () => <TheTeam />
export const NotFoundPage = () => <NotFound />
export const PrivacyPolicyPage = () => <PrivacyPolicy />
