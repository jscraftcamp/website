import React from "react"

import Layout from "../components/layout"
import { baseColor } from "../_data"

const data = [
  { name: "Venue", priceRange: "room for ~100 people", icon: "home", sponsor: "Virtual Identity", issueId: 548 },
  { name: "Beverages", priceRange: "~500 €", icon: "local_drink", sponsor: "methodpark", issueId: 561 },
  { name: "Lunch Friday", priceRange: "~1000 €", icon: "local_restaurant", sponsor: "Hetzner Cloud", issueId: 538 },
  { name: "Lunch Saturday", priceRange: "~1000 €", icon: "local_restaurant", sponsor: "SinnerSchrader", issueId: 547 },
  { name: "Snacks Friday", priceRange: "~100 €", icon: "restaurant", sponsor: "cioplenu", issueId: 559 },
  { name: "Snacks Saturday", priceRange: "~200 €", icon: "restaurant", sponsor: "Jambit", issueId: 562 },
// { name: 'Renting Chairs', priceRange: '(for community space) ~200 €', icon: 'event_seat', issueId: },
  { name: "Coffee", priceRange: "~300 € (depends on quality)", icon: "local_cafe", sponsor: "Peerigon", issueId: 558 },
  { name: "Chairs", priceRange: "~300 €", icon: "event_seat", sponsor: "ConSol", issueId: 537 },
  { name: "T-Shirts", priceRange: "~1200 €", icon: "accessibility", sponsor: "codecentric AG", issueId: 555 },
  { name: "Stickers", priceRange: "~100 €", icon: "note", sponsor: "Entwicklerstube", issueId: 556 },
  { name: "Party", priceRange: "~1000 €", icon: "local_bar", sponsor: "TNG", issueId: 560 },
  { name: "BBQ", priceRange: "~0 €", icon: "restaurant", sponsor: "", issueId: 586 },
  { name: "Money: 100 €", priceRange: "", icon: "euro_symbol", issueId: 564 },
  { name: "Money: 200 €", priceRange: "", icon: "euro_symbol", issueId: 563 },
  { name: "Money: 500 €", priceRange: "", icon: "euro_symbol", sponsor: "DATEV", issueId: 565 }
];

/*
Later: adapt the styling, when still needed:
<style>
    ul.real_list li {
        list-style-type: disc;
    }
    i.sponsor_image {
        font-size: 8em;
    }
</style>

*/
export default () => (
  <Layout>

    <div className="container">
      <div className="row">
        <div className="col s12 m12">
          <h1 className={`header center ${baseColor}-text`}>Want to become a Sponsor?</h1>
          <h3 className="header center light">Expose your Company to a Group of Highly Motivated Technology
            Enthusiasts</h3>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row flow-text">
        <div className="col s12 m6">
          <h5 className="header center">You will get ...</h5>
          <ul className="real_list">
            <li>Get up to <b>5 preregistered participant spots</b> for your representatives</li>
            <li>We place your <b>logo</b> and <b>link</b> on the JSCraftCamp website</li>
            <li>Your <b>exhibitor</b> will be visible for the whole time during the event</li>
            <li>Your <b>company name</b> will be mentioned several times during the conference</li>
            <li>It's an OpenSpace &mdash; contribute the <b>talks that are important to you</b> to the
              community
            </li>
            <li>Sponsors will be announced via the official JSCC <b>Twitter</b> account</li>
          </ul>
        </div>
        <div className="col s12 m6">
          <h5 className="header center">Why Sponsor?</h5>
          <p className="block">
            The JSCraftCamp is an Open Space conference that attracts diverse people from the JavaScript
            community
            who really care about their craft. The crowd is self selected by investing time for their own
            application
            (pull request).
            Besides developers, you will find all kind of people with different job roles that really care
            about
            technology and improvement.
            You will get the chance to present your brand to these 100 to 120 highly skilled individuals and
            show
            them how much you care!
            We'll all thank you for that!</p>
        </div>
      </div>

    </div>

    <div className="row">
      <h3 className="header center light">Show how much you care about improving the state of Crafting Software
        and Clean Code in
        the JS-Community!</h3>
    </div>

    <div className="container">
      <h2 className="header center" id="what-to-sponsor">What to Sponsor?</h2>
      <p className="flow-text block">
        All expense will serve the attendees of the JSCraftCamp, all the expenses serve for food, drinks,
        chairs,
        and all alike things that are needed for spending a couple of days together thinking and hacking for the
        modern world.
      </p>
      <div id="participants" className="row">
        {
          data.map(d => <SponsorItem {...d} key={d.name}/>)
        }
      </div>
    </div>
  </Layout>)

const SponsorItem = ({ needsSponsor, name, icon, issueId, sponsor, priceRange }) => (
  <div className="col s12 m6 l3">
    <div className="card small">
      <a name={name}/>
      <div className={`card-image center ${needsSponsor ? "orange-text" : "grey-text"}`}>
        <i style={{
          fontSize: "8em"
        }} className="sponsor_image material-icons">{icon}</i>
      </div>
      <div className="card-content">
        <span className="card-title activator">{name}
        </span>
        <p>{priceRange}</p>
      </div>
      <div className="card-action">
        <div className="card-tags-container center">
          {needsSponsor && <a href={"https://github.com/jscraftcamp/website/issues/" + issueId}>
            Sponsor this!<br/>
            Click for details<br/> and to contact us.
          </a>
          }
          {!needsSponsor && <>
            <span>✅</span> Sponsored by {sponsor}
          </>
          }
        </div>
      </div>
    </div>
  </div>
);