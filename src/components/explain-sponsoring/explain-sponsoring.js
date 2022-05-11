import React from "react"
import cn from "classnames"
import { Link } from "gatsby"

import Section from "../section"
import Spacer from "../spacer"
import TextBlock from "../text-block"
import Typography from "../typography"

import style from "./explain-sponsoring.module.scss"

const ExplainSponsoring = () => (
  <Section className={style.root}>
    <TextBlock  headlineComponent="h1" headline="Want to become a Sponsor?">
      <Typography component="h3">
        Expose your Company to a Group of Highly Motivated Technology
        Enthusiasts
      </Typography>
      <Spacer size="xs" />
      <div className={cn(style.text_left, "container")}>
        <div className="row">
          <div className="col s12 m6">
            <h5>You will get ...</h5>
            <ul>
              <li>
                Get up to <strong>5 preregistered participant spots</strong> for
                your representatives
              </li>
              <li>
                We place your <strong>logo</strong> and <strong>link</strong> on
                the JSCraftCamp website
              </li>
              <li>
                Your <strong>exhibitor</strong> will be visible for the whole
                time during the event
              </li>
              <li>
                You can bring a <strong>stand-up display</strong> to be
                permanently visible.
              </li>
              <li>
                You can make your job ads visible for all attendees for the
                whole time during the conference.
              </li>
              <li>
                Your <strong>company name</strong> will be mentioned several
                times during the conference
              </li>
              <li>
                It's an OpenSpace &mdash; contribute the{" "}
                <strong>talks that are important to you</strong> to the
                community
              </li>
              <li>
                Sponsors will be announced via the official JSCC{" "}
                <strong>Twitter</strong> account
              </li>
            </ul>
          </div>
          <div className="col s12 m6">
            <h5>Why Sponsor?</h5>
            <p className="block">
              The JSCraftCamp is an Open Space conference that attracts diverse
              people from the JavaScript community who really care about their
              craft. The crowd is self selected by investing time for their own
              application (pull request). Besides developers, you will find all
              kind of people with different job roles that really care about
              technology and improvement. You will get the chance to present
              your brand to these 80 to 120 highly skilled individuals and show
              them how much you care! We'll all thank you for that!
            </p>
          </div>
        </div>
      </div>

      <Typography paragraph>
        Show how much you care about improving the state of Crafting Software
        and Clean Code in the JS-Community!
      </Typography>

      <Typography paragraph>
        We believe in people and our guests - so we ask nothing more of
        everybody than to be respectful and friendly with one another.
      </Typography>
      <Spacer size="xs" />

      <Typography component="h3" className={style.sub_headline}>
        What to Sponsor?
      </Typography>
      <Typography paragraph>
        All expense will serve the attendees of the JSCraftCamp, all the
        expenses serve for food, drinks, chairs, and all alike things that are
        needed for spending a couple of days together thinking and hacking for
        the modern world.
      </Typography>
      <Spacer size="xs" />

      <Typography
        component={Link}
        href="https://github.com/orgs/jscraftcamp/projects/3"
      >
        Find all sponsoring items on GitHub:
        <br />
        https://github.com/orgs/jscraftcamp/projects/3
      </Typography>
    </TextBlock>
  </Section>
)
export default ExplainSponsoring
