import React from "react"
import style from "./code-of-conduct.module.scss"
import Typography from "../typography"
import Section from "../section"
import TextBlock from "../text-block"

const CodeOfConduct = () => (
  <Section className={style.root}>
    <TextBlock headline="Code of Conduct">
      <Typography className={style.paragraph} paragraph>
        We are committed to providing a friendly, safe and welcoming environment
        for all, regardless of gender, sexual orientation, programming language,
        ability, ethnicity, socioeconomic status, and religion (or lack
        thereof).
      </Typography>
      <Typography className={style.paragraph} paragraph>
        We believe in people and our guests - so we ask nothing more of
        everybody than to be respectful and friendly with one another.
      </Typography>
      <Typography className={style.paragraph} paragraph>
        And so we invite all those who participate in the JSCraftCamp and the
        community surrounding the conference to help us create safe and positive
        experiences for everyone.
      </Typography>
      <Typography className={style.paragraph} paragraph>
        If you have any questions or problems regarding this Code of Conduct,
        don't hesitate to contact one of us from the team.
      </Typography>
    </TextBlock>
  </Section>
)
export default CodeOfConduct
