import React from "react"

import Index from "."
import Imprint from "./imprint"
import TheTeam from "./theteam"
import NotFound from "./404"
import PrivacyPolicy from "./privacypolicy"

export default {
  title: "Pages|main",
}

export const IndexPage = () => <Index />
export const ImprintPage = () => <Imprint />
export const TheTeamPage = () => <TheTeam />
export const NotFoundPage = () => <NotFound />
export const PrivacyPolicyPage = () => <PrivacyPolicy />
