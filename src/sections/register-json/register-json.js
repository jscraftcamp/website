import React from "react"

import Typography from "../../components/typography"

import * as styles from "./register-json.module.scss"

export const RegisterJson = () => (
  <>
    <Typography component="h3" className="center">
      The JSON Format
    </Typography>

    <div>
      <pre className={styles.cardPanel}>
        <code
          className="language-json"
          dangerouslySetInnerHTML={{
            __html: `{
    "name": "Your real name (OR a nickname)",
    "company": "your company name (optional)",
    "when": {
       "friday": true,
       "saturday": true
    },
    "tags": ["any", "tag", "you like"],
    "vegan": true/false,
    "vegetarian": true/false,
    "allergies": "... (optional)",
    "what_is_my_connection_to_javascript": "Say something about you and JS ...",
    "what_can_i_contribute": "How can you contribute to the event? 
                              If you don't know yet, 
                              feel free to give it some thought ...",
    "tshirt": "W-S",
    "twitter": "handle (optional)"
}
`,
          }}
        ></code>
      </pre>
    </div>

    <div className={styles.cardPanel}>
      <table className="bordered">
        <tbody>
          <tr>
            <td>
              <strong>
                <code>name</code> *
              </strong>
            </td>
            <td>first name and last name or a nick name</td>
          </tr>
          <tr>
            <td>
              <code>company</code>
            </td>
            <td>A company name</td>
          </tr>
          <tr>
            <td>
              <strong>
                <code>when.friday</code> *
              </strong>
            </td>
            <td>If you are attending on Friday (Boolean value)</td>
          </tr>
          <tr>
            <td>
              <strong>
                <code>when.saturday</code> *
              </strong>
            </td>
            <td>If you are attending on Saturday (Boolean value)</td>
          </tr>
          <tr>
            <td>
              <strong>
                <code>tags</code> *
              </strong>
            </td>
            <td>
              Share what you think is important, use at least one tag. (Array of
              strings)
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                <code>vegan</code> *
              </strong>
            </td>
            <td>
              Just for planning: Let us know if you are a vegan** (Boolean
              value)
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                <code>vegetarian</code> *
              </strong>
            </td>
            <td>
              Just for planning: Let us know if you are a vegetarian** (Boolean
              value)
            </td>
          </tr>
          <tr>
            <td>
              <code>allergies</code>
            </td>
            <td>Tell us if you have any special dietary requirements**</td>
          </tr>
          <tr>
            <td>
              <strong>
                <code>what_is_my_connection_to_javascript</code>&nbsp;*
              </strong>
            </td>
            <td>
              2-5 sentences about your experience with JavaScript or related
              technologies.
            </td>
          </tr>
          <tr>
            <td>
              <code>what_can_i_contribute</code>
            </td>
            <td>
              1-3 sentences about what you would like to contribute to the
              BarCamp.
            </td>
          </tr>
          <tr>
            <td>
              <code>tshirt</code> **
            </td>
            <td>
              We will have a limited number of t-shirts with the event and
              sponsor logos. If you want one: fit (W=women, M=Man) and size
              (S,M,L,XL,XXL), e.g. W-S or M-XL. If your registration is shortly
              before the event there might be no time to have a t-shirt produced
              for you, please be aware.
            </td>
          </tr>
          <tr>
            <td>
              <code>twitter</code>
            </td>
            <td>
              Your Twitter handle <em>without</em> the leading <code>@</code>.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>*: mandatory field</strong>
      </p>
      <p>
        **: This is a free and completely sponsored event. Even though we want
        to try, we can not guarantee to be able to respect every dietary
        requirement
      </p>
    </div>
  </>
)

export default RegisterJson
