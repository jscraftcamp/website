import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { theteam } from "../_data"

const TeamPage = () => {
  return (
    <Layout>
      <SEO title="team"/>
      <div className="container">
        <div className="row">
          <div className="col s12 m12">
            <h1 className="header center blue-text">The Team</h1>
            <p className="block center">
              We are simple developers organizing this event in our spare time.
              If you have any questions or problems before or during the conference, don't hesitate to contact one of
              us!
            </p>
            <p>You can always reach us by E-Mail: <a href="mailto: team@jscraftcamp.org">team@jscraftcamp.org</a></p>
          </div>
        </div>
        <div className="row">
          {
            theteam.map((member, idx) =>
              <div className="col s12 m4 l3" key={member.name}>
                <div className="card">
                  {member.photo && (
                    <div className="card-image">
                      <img className="responsive-img materialboxed"
                           alt={"member image " + member.name} src={"/img/theteam/" + member.photo}/>
                    </div>)
                  }
                  <div className="card-content">
                      <span className="card-title grey-text text-darken-4">
                      {member.name}
                      </span>
                    <br/>
                    <a className="grey-text text-darken-6" href={"mailto:" + member.email}>
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;

