import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Values = () => (
  <Layout>
    <SEO title="values" description="code of conduct"/>
    <div className="container">
      <div className="row flow-text">
        <div className="col s12 l10 offset-l1">
          <h5 className="header center">Our Code of Conduct</h5>
          <p className="block">
            We are committed to providing a friendly, safe and welcoming environment for all, regardless of gender,
            sexual
            orientation, programming language, ability, ethnicity, socioeconomic status, and religion (or lack
            thereof).
          </p>
          <p className="block">
            We believe in people and our guests - so we ask nothing more of everybody than to
            be <strong>respectful</strong> and <strong>friendly</strong> with one another.
          </p>
          <p className="block">
            And so we invite all those who participate in the JSCraftCamp and the community surrounding the
            conference to
            help us create safe and positive experiences for everyone.
          </p>
          <p>
            If you have any questions or problems regarding this Code of Conduct, don't hesitate to contact one of
            us from <Link to={"theteam"}>the team.</Link>
          </p>
        </div>
      </div>
    </div>
  </Layout>);

export default Values;
