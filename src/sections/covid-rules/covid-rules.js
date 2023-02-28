import React from "react"
import * as style from "./covid-rules.module.scss"
import Typography from "../../components/typography"
import Section from "../../components/section"
import TextBlock from "../../components/text-block"
import Rule from "./rule"

const CovidRules = () => (
  <Section className={style.root}>
    <TextBlock headlineComponent="h2" headline="Covid-Rules">
      <div className={style.columns}>
        <div className={style.column}>
          <Typography paragraph>
            The global pandemic is still ongoing. We want to make sure that even
            vulnerable groups can attend our event under the current
            circumstances. To ensure the safety of all participants, we want
            everyone to follow a couple of rules.
          </Typography>
          <Typography paragraph>
            If you have any questions or problems regarding these rules, don't
            hesitate to contact one of us from the team.
          </Typography>
        </div>
        <div className={style.column}>
          <ul className={style.list}>
            <Rule
              icon="⚠️"
              text="Have a test certificate ready - will be checked at the entrance.
               Ideally issued in last 24 hours. Due to the bank holiday on Thursday, up to max. 48h will be accepted."
            />
            <Rule icon="👥" text="Max. 80 people at the location!" />
            <Rule icon="😷" text="Wear an FFP2 mask whenever possible!" />
            <Rule icon="💦" text="Wash your hands thoroughly!" />
            <Rule
              icon="🍫"
              text="When you grab a snack, don't lick it and put it back!"
            />
          </ul>
        </div>
      </div>
    </TextBlock>
  </Section>
)

export default CovidRules
