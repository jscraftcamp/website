import React from "react"
import { Link } from "gatsby"

import { baseColor } from '../_data.json'

import Layout from "../components/layout"
import SEO from "../components/seo";
/*
            <script type="text/javascript" src="js/prism.js"></script>
            <script type="text/javascript" src="js/prism-line-highlight.js"></script>

 */
export default () => (
  <Layout>
    <SEO title="registration"/>

    <div className="container">
      <div className="row">
        <div className="col s12 m12">
          <h1 className={`header center ${baseColor}-text`}>Registration</h1>
          <h3 className="header center light">Create a JSON File and submit it via a GitHub Pull Request</h3>
          <p>To register for JSCraftCamp you have to add a json file with your name and some other information to our <a href="https://github.com/jscraftcamp/website" rel="noreferrer noopener" target="_blank">GitHub
              Repository</a> via a <a href="http://stackoverflow.com/questions/14680711/how-to-do-a-github-pull-request"
               rel="noreferrer noopener" target="_blank">Pull Request</a>.
            Registration is free of charge.
            Your json file should follow the naming scheme <code>$firstname_$lastname.json</code>and must be placed in
            the folder <code>participants</code>.
            The structure of the file is described below.</p>
          <p>To test if your json file is a valid registration you can run <code>npm test</code> (more details about this are in the <a href="https://github.com/jscraftcamp/website/blob/master/README.md"
                 rel="noreferrer noopener" target="_blank">README</a>).
            Invalid registrations will be rejected.
            <br/>If you need any help with registration, don't hesitate to contact one of <a href="./theteam">the
              team</a>.
          </p>
          <p>Out of these files a page with information about <Link to="/participants">all participants</Link> will be generated.</p>
          <p></p>
          <p>To unregister please write another pull request or <a href="mailto:team@jscraftcamp.org">let us know</a>.
          </p>
        </div>
        <div className="col s12 m12">
          <h4 className="header center colorOfTheYear-text">The JSON Format</h4>
        </div>
        <div className="col s12 m12">
    <pre className="card-panel language-json" style={{ background: "white" }}>
    <code className="language-json"
          dangerouslySetInnerHTML={{
            __html: `
{
    "name": "Your real name (OR a nickname)",
    "company": "optionally, your company name",
    "when": {
    "friday": true,
    "friday_party": true,
    "saturday": true
},
    "tags": ["any", "tag", "you like"],
    "vegan": true/false,
    "vegetarian": true/false,
    "allergies": "...",
    "what_is_my_connection_to_javascript": "Say something about you and JS ...",
    "what_can_i_contribute": "How can you contribute to the event? If you don't know yet, feel free to give it some thought ...",
    "tshirt": "W-S",
    "twitter": "handle"
}
`
          }}>
    </code>
    </pre>
        </div>
        <div className="col s12 m12" style={{ background: "white" }}>
          <table className="bordered">
            <tr>
              <td><code>name</code>*</td>
              <td>first name and last name or a nick name</td>
            </tr>
            <tr>
              <td><code>company</code></td>
              <td>A company name</td>
            </tr>
            <tr>
              <td><code>when.friday</code>*</td>
              <td>If you are attending on Friday (Boolean value)</td>
            </tr>
            <tr>
              <td><code>when.friday_party</code>*</td>
              <td>If you want to join us on the free Party that will happen Friday after the event (same location).
                Drinks and food sponsored!
              </td>
            </tr>
            <tr>
              <td><code>when.saturday</code>*</td>
              <td>If you are attending on Saturday (Boolean value)</td>
            </tr>
            <tr>
              <td><code>tags</code>*</td>
              <td>Share what you think is important, use at least one tag. (Array of strings)</td>
            </tr>
            <tr>
              <td><code>vegan</code>*</td>
              <td>Let us know if you are a vegan** (Boolean value)</td>
            </tr>
            <tr>
              <td><code>vegetarian</code>*</td>
              <td>Let us know if you are a vegetarian** (Boolean value)</td>
            </tr>
            <tr>
              <td><code>allergies</code></td>
              <td>Tell us if you have any special dietary requirements**</td>
            </tr>
            <tr>
              <td><code>what_is_my_connection_to_javascript</code>*</td>
              <td> 2-5 sentences about your experience with JavaScript or related technologies.</td>
            </tr>
            <tr>
              <td><code>what_can_i_contribute</code></td>
              <td>1-3 sentences about what you would like to contribute to the BarCamp.</td>
            </tr>
            <tr>
              <td><code>tshirt</code></td>
              <td>We will have a limited number of t-shirts with the event and sponsor logos. If you want one: fit
                (W=women, M=Man) and size (S,M,L,XL), e.g. W-S or M-XL. If your rregistration is shortly before the
                event there might be no time to have a T-Shirt produced for you, please be aware.
              </td>
            </tr>
            <tr>
              <td><code>twitter</code></td>
              <td>Your Twitter handle without the leading <code>@</code>.</td>
            </tr>
          </table>
          <p>*: mandatory field</p>
          <p>**: This is a free and completely sponsored event. Even though we want to try, we can not guarantee to be
            able to respect every dietary requirement</p>
        </div>
      </div>

    </div>
  </Layout>)