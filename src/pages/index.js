import React from "react"
import { Link } from "gatsby"

import Sponsors from "../DEPRECATED_components/Sponsors"
import Facilitator from "../DEPRECATED_components/Facilitator"
import Schedule from "../DEPRECATED_components/Schedule"
import Location from "../DEPRECATED_components/Location"
import { JsccLogo } from "../DEPRECATED_components";

import Page from "../components/page"
import Section from "../components/section"
import Intro from "../components/intro"

const IndexPage = () => (

  <Page title="Location">
    <Section>
      <div className="container" style={{ marginTop: "4em" }}>
        <JsccLogo/>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 m12">
            <h3 className="header center">
              Unfortunately and due to the current situation, we can not say if or how JSCC 2020 will actually take place.
              <br/>
              We from the Orga team are observing the situation and will try to make a decision as soon as possible.
              <br/>
              Until then, it is probably best for you to consider JSCC cancelled 😞
              <br/>
              We are terribly sorry.
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 m12">

            <h1 className="header center colorOfTheYear-text">
              JSCraftCamp 2020
            </h1>
            <h3 className="header center">
              Will return to Munich
            </h3>
            <h3 className="header center light">
              A BarCamp about JavaScript and Crafting Software
            </h3>
            <h3 className="header center light">
              <a href="https://web.archive.org/web/20190331082416/http://jscraftcamp.org/photos2018">
                Impressions from 2018
              </a>
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 m4 offset-m4">
            <h4 className="header center colorOfTheYear-text">
              Follow us on{" "}
              <a href="https://twitter.com/JSCraftCamp">
                Twitter&nbsp;
                <img
                  src="img/twitter.png"
                  alt="twitter logo"
                  style={{ width: 25 }}
                />
              </a>
            </h4>
            <p style={{ textAlign: "center" }}>
              Be the first to know informations about JSCC20!
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row flow-text">
          <div className="col s12 m6">
            <h5 className="header center">JavaScript</h5>
            <p className="block">
              The focus of this BarCamp are JavaScript and related technologies.
              Possible topics are: Popular frameworks like Angular and React,
              the latest ECMAScript standard, languages like Elm or TypeScript
              which transpile to JavaScript, server-side programming with
              node.js, paradigms like event driven programming or future
              technologies like WebAssembly.
            </p>
          </div>
          <div className="col s12 m6">
            <h5 className="header center">Crafting Software</h5>
            <p className="block">
              Have you ever struggled with an huge old JavaScript codebase? Or
              rolled your eyes about an{" "}
              <code>'undefined' is not a function</code> error? We will discuss
              which tools, practices and architecture patterns – from continuous
              integration to modular components – can help to create and
              maintain long-living, evolvable JavaScript applications.
            </p>
          </div>
        </div>
        <div className="row flow-text">
          <div className="col s12 m6">
            <h5 className="header center">BarCamp</h5>
            <p className="block">
              A barcamp – also called an unconference – is an event without any
              previously fixed agenda. All the participants meet in the morning
              and decide about the schedule for the day. Everyone can offer a
              session - from a short hands-on workshop to moderating a
              discussion. The goal is to make everything as participative as
              possible. Read more{" "}
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Unconference"
              >
                about BarCamp on Wikipedia
              </a>
              .
            </p>
          </div>
          <div className="col s12 m6">
            <h5 className="header center">How to register?</h5>
            <p className="block">
              Attendance is <strong>free of charge</strong> and we encourage to
              sign up in advance. Registration happens by submitting your name
              and some other information via{" "}
              <a
                href="http://stackoverflow.com/questions/14680711/how-to-do-a-github-pull-request"
                target="_blank"
              >
                Pull Request
              </a>
              . More infos and explanations can be found on the{" "}
              <Link to="registration">Registration Page.</Link>
            </p>
          </div>
        </div>

        <Facilitator />

        <a name="schedule" />
        <Schedule />
        <Sponsors />

        <a name="location" />
        <Location />
      </div>

      <Intro />
    </Section>
  </Page>
)

export default IndexPage