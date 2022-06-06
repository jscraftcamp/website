import React from "react"
import Page from "../components/page"
import Section from "../components/section"
import TextBlock from "../components/text-block"
import Typography from "../components/typography"

import RegisterJson from "../sections/register-json"

import { Link } from "gatsby"

// TODO: create for the content a new "Section" in the components
const Registration = () => (
  <Page title="Registration">
    <Section>
      <TextBlock headline="Registration">
        <Typography paragraph>
          To register for JSCraftCamp you have to add a json file with your name
          and some other information to our{" "}
          <a
            href="https://github.com/jscraftcamp/website"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub Repository
          </a>{" "}
          via a{" "}
          <a
            href="http://stackoverflow.com/questions/14680711/how-to-do-a-github-pull-request"
            rel="noreferrer noopener"
            target="_blank"
          >
            Pull Request
          </a>
          . Registration is free of charge. Your json file should follow the
          naming scheme <code>$name_or_nickname.json</code> and must be placed
          in the folder <code>participants</code>. The structure of the file is
          described below.
        </Typography>

        <Typography paragraph>
          To test if your json file is a valid registration you can run{" "}
          <code>npm test</code>
          (more details about this are in the{" "}
          <a
            href="https://github.com/jscraftcamp/website/blob/main/README.md"
            rel="noreferrer noopener"
            target="_blank"
          >
            README
          </a>
          ). Invalid registrations will be rejected. If you need any help with
          registration, don't hesitate to contact one of the{" "}
          <Link to="/theteam">team</Link>.
        </Typography>

        <Typography paragraph>
          Out of these files a page with information about all participants will
          be generated.
        </Typography>

        <Typography paragraph>
          To unregister please write another pull request or{" "}
          <a href="mailto:team@jscraftcamp.org">let us know</a>.
        </Typography>
      </TextBlock>

      <RegisterJson />
    </Section>
  </Page>
)

export default Registration
