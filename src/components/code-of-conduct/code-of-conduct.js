import React from "react"
import style from "./code-of-conduct.module.scss"
import Typography from "../typography"
import Section from "../section"
import TextBlock from "../text-block"

export default () => (
  <Section className={style.root}>
    <TextBlock headline="Code of Conduct">
      <div className={style.paragraphs}>
        <Typography paragraph>
          We are committed to providing a friendly, safe and welcoming
          environment for all, regardless of gender, sexual orientation,
          programming language, ability, ethnicity, socioeconomic status, and
          religion (or lack thereof).
        </Typography>
        <Typography paragraph>
          We believe in people and our guests - so we ask nothing more of
          everybody than to be respectful and friendly with one another.
        </Typography>
        <Typography paragraph>
          And so we invite all those who participate in the JSCraftCamp and the
          community surrounding the conference to help us create safe and
          positive experiences for everyone.
        </Typography>
        <Typography>
          If you have any questions or problems regarding this Code of Conduct,
          don't hesitate to contact one of us from the team.
        </Typography>
      </div>
    </TextBlock>
  </Section>
)
