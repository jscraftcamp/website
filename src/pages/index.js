import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import _data from '../_data';
import Image from "../components/image";

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <>
      <div className="container logo centered">
        <div style={
          {display: 'flex', alignItems: 'left'}
        }>
          <Image src="/src/images/new_logo.png" alt="logo" height={300} />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 m12">
            <h1 className={`header center ${_data.baseColor}-text`}>JSCraftCamp 2020</h1>
            <h3 className="header center">Will return to Munich, July 10th - 11th 2020!</h3>
            <h3 className="header center light">A BarCamp about JavaScript and Crafting Software</h3>
            <h3 className="header center light"><a href="/photos2018.html">Impressions from 2018</a></h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 m4 offset-m4">
            <h4 className={`header center ${_data.baseColor}-text`}>
              Follow us on <a href="https://twitter.com/JSCraftCamp">Twitter&nbsp;<img src="img/twitter.png" alt="twitter logo"
                                                                                       style={{width: 25}}/></a>
            </h4>
            <p style={{textAlign: 'center'}}>Be the first to know informations about JSCC20!</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row flow-text">
          <div className="col s12 m6">
            <h5 className="header center">JavaScript</h5>
            <p className="block">The focus of this BarCamp are JavaScript and related technologies. Possible topics are:
              Popular frameworks like Angular and React, the latest ECMAScript standard, languages like Elm or
              TypeScript which transpile to JavaScript, server-side programming with node.js, paradigms like event
              driven programming or future technologies like WebAssembly.</p>
          </div>
          <div className="col s12 m6">
            <h5 className="header center">Crafting Software</h5>
            <p className="block">Have you ever struggled with an huge old JavaScript codebase? Or rolled your eyes about
              an <code>'undefined' is not a function</code> error? We will discuss which tools, practices and
              architecture patterns – from continuous integration to modular components – can help to create and
              maintain long-living, evolvable JavaScript applications.</p>
          </div>
        </div>
        <div className="row flow-text">
          <div className="col s12 m6">
            <h5 className="header center">BarCamp</h5>
            <p className="block">A barcamp – also called an unconference – is an event without any previously fixed
              agenda.
              All the participants meet in the morning and decide about the schedule for the day.
              Everyone can offer a session - from a short hands-on workshop to moderating a discussion. The goal is to
              make everything as participative as possible. Read
              more <a target="_blank" href="https://en.wikipedia.org/wiki/Unconference">about BarCamp on Wikipedia</a>.
            </p>
          </div>
          <div className="col s12 m6">
            <h5 className="header center">How to register?</h5>
            <p className="block">Attendance is <strong>free of charge</strong> and we encourage to sign up in advance.
              Registration happens by submitting your name and some other information
              via <a href="http://stackoverflow.com/questions/14680711/how-to-do-a-github-pull-request" target="_blank">Pull
                Request</a>.
              More infos and explanations can be found on the <Link to="registration">Registration Page.</Link>
            </p>
          </div>
        </div>

        {false &&
        <div className="row">
          <h4 className={`header center ${_data.baseColor}-text`}>Facilitation by</h4>
          <h5 className="header center">Cecilia Maria Zannini - <a href="https://connexxo.com">Connexxo</a></h5>
        </div>
        }

        <a name="schedule"/>
        {false &&
        <>
        <h4 className={`header center ${_data.baseColor}-text`}>Schedule</h4>
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
                  <td>Party / BBQ <a href="https://github.com/jscraftcamp/website/issues/560">sponsored by TNG</a></td>
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
                  <td>Lunch <a href="https://github.com/jscraftcamp/website/issues/547">sponsored by SinnerSchrader</a>
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
            <h5 className={`header center ${_data.baseColor}-text`}>Take notes!</h5>
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
        }

        {false &&
        <div className="row" id="sponsors">
          <h4 className={`header center ${_data.baseColor}-text`}>Sponsors</h4>
          <div className="col s12 sponsor-logos">
            <a href="http://virtual-identity.com/" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/vi.jpg" alt="Virtual Identity AG"/>
            </a>
            <a href="https://www.codecentric.de/" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/codecentric.png"/>
            </a>
            <a href="https://peerigon.com/" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/peerigon.png"/>
            </a>
            <a href="https://entwicklerstube.com" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/entwicklerstube.png"/>
            </a>
            <a href="https://sinnerschrader.com/" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/sinnerschrader.svg"/>
            </a>
            <a href="https://www.methodpark.com/" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/methodpark.png"/>
            </a>
            <a href="https://cioplenu.com/" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/cioplenu.jpg"/>
            </a>

            <a href="https://www.jambit.com/" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/jambit.png"/>
            </a>

            <a href="https://www.tngtech.com" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/tng.png"/>
            </a>

            <a href="https://github.com/ConSol" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/consol.png"/>
            </a>

            <a href="https://github.com/hetznercloud" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/hetzner_cloud.svg"/>
            </a>

            <a href="https://www.datev.de" className="sponsor" target="_blank">
              <img className="responsive-img" src="img/sponsor-2019/datev.png"/>
            </a>

          </div>
          }

          {
            /*
            sponsors of previous years ...

        //   <a href="https://netcentric.biz/" className="sponsor" target="_blank">
        //     <img className="responsive-img" src="img/sponsor-2018/netcentric.png"/>
        //   </a>
        //   <a href="https://www.futurice.com/" className="sponsor" target="_blank">
        //     <img className="responsive-img" src="img/sponsor-2018/futurice.png"/>
        //   </a>
        //   <a href="http://tech.prosiebensat1.com" className="sponsor" target="_blank">
        //     <img className="responsive-img" src="img/sponsor-2018/pro7sat1.png"/>
        //   </a>
        //   <a href="https://www.mayflower.de/" className="sponsor" target="_blank">
        //     <img className="responsive-img" src="img/sponsor-2018/mayflower.png"/>
        //   </a>
        //     <a href="https://www.trustyou.com/" className="sponsor" target="_blank">
        //       <img className="responsive-img" src="img/sponsor-2017/trustyou-logo.png" alt="TrustYou GmbH">
        //     </a>
        //     <a href="http://www.mercateo.com/corporate/" className="sponsor" target="_blank">
        //       <img className="responsive-img" src="img/sponsor-2017/mercateo.jpg"/>
        //     </a>
        //     <a href="https://holidaycheck.de" className="sponsor" target="_blank">
        //       <img className="responsive-img" src="img/sponsor-2017/holidaycheck.jpg"/>
        //     </a>
        //     <a href="https://wunder.io" className="sponsor" target="_blank">
        //       <img className="responsive-img" src="img/sponsor-2017/wunder.png"/>
        //     </a>
        //     <a href="https://2017.js-kongress.de/" className="sponsor" target="_blank">
        //       <img className="responsive-img" src="img/sponsor-2017/jskongress_logo.png"/>
        //     </a>
        //     <a href="http://campudus.com" className="sponsor" target="_blank">
        //       <img className="responsive-img" src="img/sponsor-2017/campudus-developers-logo-rgb.svg"/>
        //     </a>
        //     <a href="https://www.adesso.de" className="sponsor" target="_blank">
        //       <img className="responsive-img" src="img/sponsor-2017/adesso_logo.png"/>
        //     </a>
        //     <a href="https://scout24.com/" className="sponsor" target="_blank">
        //          <img className="responsive-img" src="img/sponsor-2019/scout24.svg"/>
        //      </a>
        // </div>
        */
          }
        </div>
        }

        <a name="location"/>
        {false &&
        <>
        <h4 className={`header center ${_data.baseColor}-text`}>Location</h4>
        <h5 className="header center">
          <a
            href="https://www.google.com/maps/place/Virtual+Identity+AG+M%C3%BCnchen/@48.0970276,11.5430163,17z/data=!3m1!4b1!4m5!3m4!1s0x479e75eb96bfb00b:0x2cd12f60e6a5c63c!8m2!3d48.097024!4d11.545205">
            Virtual Identity AG<br/>
            Isarwinkel 16<br/>
            81379 München<br/>
          </a>
        </h5>
      </>
      }
      </div>

    </>
  </Layout>
);

export default IndexPage
