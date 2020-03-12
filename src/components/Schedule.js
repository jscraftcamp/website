import React from "react";

import { baseColor } from "../_data.json";

const Schedule = () =>
  <>
    <h4 className={`header center ${baseColor}-text`}>Schedule</h4>
    <div className="row">
      <div className="col s12 m12">
        <div className="col s12 m6">
          <h5 className="header center">Friday</h5>
          <table className="bordered">
            <tr>
              <td>9:00</td>
              <td>Doors open</td>
            </tr>
            <tr>
              <td>10:00-11:00</td>
              <td>Opening &amp; Marketplace</td>
            </tr>
            <tr>
              <td>11:00-12:00</td>
              <td>Sessions (1 Time Slot)</td>
            </tr>
            <tr>
              <td>12:00-13:00</td>
              <td>Lunch <a href="https://github.com/jscraftcamp/website/issues/538">sponsored by Hetzner Cloud</a>
              </td>
            </tr>
            <tr>
              <td>13:00-17:00</td>
              <td>Sessions</td>
            </tr>
            <tr>
              <td>17:00-18:00</td>
              <td>Review &amp; Evening News</td>
            </tr>
            <tr>
              <td>18:00-24:00</td>
              <td>Party / BBQ <a href="https://github.com/jscraftcamp/website/issues/560">sponsored by ???</a></td>
            </tr>
            <tr>
              <td>18:00-24:00</td>
              <td>Evening Sessions</td>
            </tr>
          </table>
        </div>
        <div className="col s12 m6">
          <h5 className="header center">Saturday</h5>
          <table className="bordered">
            <tr>
              <td>9:30</td>
              <td>Doors open</td>
            </tr>
            <tr>
              <td>10:00-11:00</td>
              <td>Marketplace</td>
            </tr>
            <tr>
              <td>11:00-12:00</td>
              <td>Sessions</td>
            </tr>
            <tr>
              <td>12:00-13:00</td>
              <td>Lunch <a href="https://github.com/jscraftcamp/website/issues/547">sponsored by ???</a>
              </td>
            </tr>
            <tr>
              <td>13:00-17:00</td>
              <td>Sessions</td>
            </tr>
            <tr>
              <td>17:00-18:00</td>
              <td>Review &amp; Closing</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="col s12 m12">
        <h5 className={`header center ${baseColor}-text`}>Take notes!</h5>
        <p>
          If you participate in a session, it's always good to write down notes.
          It helps you keep track of all the information you receive, you will remember the name of the
          new tech that was mentioned and maybe the session owner shares some slides online. For
          additional fame and bonus points from your peers, share your notes in the
          <a href="https://github.com/jscraftcamp/jscc20-sessions">official repository for session notes</a>!
        </p>
      </div>
    </div>
  </>

Schedule.displayName = 'Schedule'
export default Schedule