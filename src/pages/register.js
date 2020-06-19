import React from "react"
import Page from "../components/page"
import Section from "../components/section"
import TextBlock from "../components/text-block"
import Typography from "../components/typography"

// TODO, this is just a test, create for the content a new "Section" in the components
export default () => (
  <Page title="Location">
    <Section>
      <TextBlock headline="Registration" headlineComponent="h1">
        <Typography paragraph>
          To register for JSCraftCamp you have to add a json file with your name
          and some other information to our GitHub Repository via a Pull
          Request. Registration is free of charge. Your json file should follow
          the naming scheme $firstname_$lastname.json and must be placed in the
          folder participants. The structure of the file is described below.
        </Typography>

        <Typography paragraph>
          To test if your json file is a valid registration you can run npm test
          (more details about this are in the README). Invalid registrations
          will be rejected. If you need any help with registration, don't
          hesitate to contact on of the team
        </Typography>

        <Typography>
          Out of these files a page with information about all participants is
          generated.
        </Typography>

        <Typography>
          To unregister please write another pull request or let us know.
        </Typography>
      </TextBlock>
    </Section>
  </Page>
)
