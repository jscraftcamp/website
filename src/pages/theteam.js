import React from "react"

import data from "../data.json"
import Page from "../components/page"
import Section from "../components/section"
import Spacer from "../components/spacer"
import Typography from "../components/typography"
import TextBlock from "../components/text-block"
// import Team from "../components/team";
import "../css/materialize.min.css"

const TeamPage = () => {
  return (
    <Page title="Team">

      <Section>
        <TextBlock headline="The Team" component="h1">
          <Typography paragraph>
            We are simple developers organizing this event in our spare time. If
            you have any questions or problems before or during the conference,
            don't hesitate to contact one of us!
            <br />
            You can always reach us by E-Mail:{" "}
            <a href="mailto: team@jscraftcamp.org">team@jscraftcamp.org</a>
          </Typography>
        </TextBlock>
      </Section>

      <Spacer size="m" />
      <Section>
        <div className="row">
          {data.theteam.map((member) => (
            <div className="col s12 m4 l3" key={member.name}>
              <div className="card">
                {member.photo && (
                  <div className="card-image">
                    <img
                      className="responsive-img materialboxed"
                      alt={"member image " + member.name}
                      src={"/img/theteam/" + member.photo}
                    />
                  </div>
                )}
                <div
                  className="card-content"
                  style={{
                    minHeight: "3em",
                  }}
                >
                  <div
                    className="card-title"
                    style={{
                      height: "4.5em",
                      overflow: "hidden",
                      wordWrap: "normal",
                    }}
                  >
                    <span>{member.name}</span>
                    <br />
                    <a
                      className=""
                      style={{
                        display: "inline-block",
                        width: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      href={"mailto:" + member?.email}
                    >
                      {member?.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  )
}

export default TeamPage
