import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

export default () => (
  <Layout>
    <SEO title="privacy policy" />
    <div className="container">
      <div className="row">
        <div className="col s12 m12">
          <h1>Privacy Policy</h1>

          <p>At JSCraftCamp.org one of our main priorities is the privacy of our visitors. This Privacy Policy document
            contains types of information that is collected and recorded by JSCraftCamp.org and how we use it.</p>

          <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to
            contact us through email at team@jscraftcamp.org</p>

          <p>JSCraftCamp itself collects no data at all! We don't use any trackers or advertisement. However, being
            hosted at Github.com, when you visit JSCraftCamp.org Github Inc. [US] collects log files and uses cookies.
            You can learn more about it here: <a href="https://help.github.com/articles/github-privacy-statement">GitHub
              Privacy Statement</a></p>

          <p>Note that JSCraftCamp.org has no access to or control over these cookies and log files that are used by
            Github.</p>

          <p>You can choose to disable cookies through your individual browser options. To know more detailed
            information about cookie management with specific web browsers, it can be found at the browsers' respective
            websites.</p>

          <h2>Registration for the Event</h2>

          <p>If you like to register for the JSCraftCamp conference event, you need to supply some information by
            creating a pull request to this website at github.org. The information you can supply is explained on
            the <Link to="/registration">registration page</Link>. The supplied data includes:</p>

          <ul>
            <li>name, first name, company name</li>
            <li>days of participation</li>
            <li>T-shirt-size (optional)</li>
            <li>Dietary requirements (optional)</li>
          </ul>

          <p>All this information will be publicly visible on Github and is subject to the <a
            href="https://help.github.com/articles/github-privacy-statement">GitHub Privacy Statement</a>.

            <p>Our team members will look up this information during and prior to the event, to handle the event
              organization.</p>

            <h2>Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions as
              well as to the <a href="https://help.github.com/articles/github-privacy-statement">GitHub Privacy
                Statement</a> and to its Terms and Conditions.</p>
          </p>
        </div>
      </div>
    </div>
  </Layout>)