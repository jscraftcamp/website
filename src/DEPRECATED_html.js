import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <link type="text/css" rel="stylesheet" href="/styles/materialize.min.css" media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="/styles/prism-customized.css"/>
        <link type="text/css" rel="stylesheet" href="/styles/index.css"/>
        <link type="text/css" rel="stylesheet" href="/styles/main.css" media="screen,projection"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {props.headComponents}

        <link href="/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: 'Material Icons';
            font-style: normal;
            font-weight: 400;
            src: url(/fonts/material-design-icons/materialicons38.woff2) format('woff2');
          }
          
          .material-icons {
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: 'liga';
            font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
          }
          `,
          }}
        />


      </head>

      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        {
          /*
        <script type="text/javascript" src="/js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="/js/handlebars.js"></script>
        <script type="text/javascript" src="/js/index.js"></script>
        <script type="text/javascript" src="/js/materialize.min.js"></script>
           */
        }
      <script type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
        {
        /*
          var el = document.getElementById('staticLogo');
          if (bonsai) {
            bonsai.run(el, 'https://jscraftcamp.github.io/logo/src/static-logo.js', {
              height: el.style.height,
              width: el.style.width,
              framerate: 50
            });
          }

          var logoClassList = document.getElementById('logoContainer').classList;

          var onFirstScroll = function () {
          if (window.scrollY === 0) {
          logoClassList.add('centered');
        } else {
          logoClassList.remove('centered');
        }
        }
          document.addEventListener('scroll', onFirstScroll);
        */
        }
        ` }}
      />

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
