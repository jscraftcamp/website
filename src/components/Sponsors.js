import React from "react"

import { baseColor } from "../_data.json"

import "./Sponsors.css"

const Sponsors = () => (
  <div className="row" id="sponsors">
    <h4 className={`header center ${baseColor}-text`}>Sponsors</h4>
    <div className="col s12 sponsor-logos">
      <>
        <a
          href="https://www.codecentric.de/"
          className="sponsor"
          target="_blank"
        >
          <img
            className="responsive-img"
            src="img/sponsor-2019/codecentric.png"
          />
        </a>
        <a href="https://peerigon.com/" className="sponsor" target="_blank">
          <img className="responsive-img" src="img/sponsor-2019/peerigon.png" />
        </a>
        <a
          href="https://github.com/hetznercloud"
          className="sponsor"
          target="_blank"
        >
          <img
            className="responsive-img"
            src="img/sponsor-2019/hetzner_cloud.svg"
          />
        </a>
        {/* sponsors of previous years */
        false && (
          <>
            <a
              href="https://entwicklerstube.com"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2019/entwicklerstube.png"
              />
            </a>
            <a
              href="https://sinnerschrader.com/"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2019/sinnerschrader.svg"
              />
            </a>
            <a
              href="https://www.methodpark.com/"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2019/methodpark.png"
              />
            </a>
            <a href="https://cioplenu.com/" className="sponsor" target="_blank">
              <img
                className="responsive-img"
                src="img/sponsor-2019/cioplenu.jpg"
              />
            </a>
            <a
              href="https://www.jambit.com/"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2019/jambit.png"
              />
            </a>
            <a
              href="https://www.tngtech.com"
              className="sponsor"
              target="_blank"
            >
              <img className="responsive-img" src="img/sponsor-2019/tng.png" />
            </a>
            <a
              href="https://github.com/ConSol"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2019/consol.png"
              />
            </a>
            <a href="https://www.datev.de" className="sponsor" target="_blank">
              <img
                className="responsive-img"
                src="img/sponsor-2019/datev.png"
              />
            </a>
            <a
              href="https://netcentric.biz/"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2018/netcentric.png"
              />
            </a>
            <a
              href="https://www.futurice.com/"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2018/futurice.png"
              />
            </a>
            <a
              href="http://tech.prosiebensat1.com"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2018/pro7sat1.png"
              />
            </a>
            <a
              href="https://www.mayflower.de/"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2018/mayflower.png"
              />
            </a>
            <a
              href="https://www.trustyou.com/"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2017/trustyou-logo.png"
                alt="TrustYou GmbH"
              />
            </a>
            <a
              href="http://www.mercateo.com/corporate/"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2017/mercateo.jpg"
              />
            </a>
            <a
              href="https://holidaycheck.de"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2017/holidaycheck.jpg"
              />
            </a>
            <a href="https://wunder.io" className="sponsor" target="_blank">
              <img
                className="responsive-img"
                src="img/sponsor-2017/wunder.png"
              />
            </a>
            <a
              href="https://2017.js-kongress.de/"
              className="sponsor"
              target="_blank"
            >
              <img
                className="responsive-img"
                src="img/sponsor-2017/jskongress_logo.png"
              />
            </a>
            <a href="http://campudus.com" className="sponsor" target="_blank">
              <img
                className="responsive-img"
                src="img/sponsor-2017/campudus-developers-logo-rgb.svg"
              />
            </a>
            <a href="https://www.adesso.de" className="sponsor" target="_blank">
              <img
                className="responsive-img"
                src="img/sponsor-2017/adesso_logo.png"
              />
            </a>
            <a href="https://scout24.com/" className="sponsor" target="_blank">
              <img
                className="responsive-img"
                src="img/sponsor-2019/scout24.svg"
              />
            </a>
          </>
        )}
      </>
    </div>
  </div>
)

Sponsors.displayName = "Sponsors"
export default Sponsors
