import React from "react";

import Page from "../components/page";
import Section from "../components/section";
import PostEvent from "../sections/post-event";
import Spacer from "../components/spacer";
import Explanation from "../sections/explanation";
import Sponsors from "../sections/sponsors";

const IndexPage = () => (
  <Page title="JSCraftCamp">
    <Section>
      <PostEvent />
      <Spacer size="xl" />
      <Sponsors />
      <Spacer size="xl" />
      <Explanation />
      <Spacer size="xl" />
    </Section>
  </Page>
);

export default IndexPage;
