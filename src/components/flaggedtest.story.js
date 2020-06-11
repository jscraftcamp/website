import React from "react"

// copied from
//https://github.com/chromaui/chromatic-cli/blob/cd6ad1ae904623070ae43ef076c7049c451da080/src/isChromatic.js

const isChromatic = () =>
  window.navigator.userAgent.match(/Chromatic/) ||
  window.location.href.match(/chromatic=true/)

const hideOnChromaticDeco = storyFn => {
  if (isChromatic()) {
    return (
      <div>
        This is running in Chromatic.
        <br />
        Ignored in Chromatic by intention }
      </div>
    )
  }
  return <div>{storyFn()}</div>
}

export default {
  title: "evaluate|Chromatic-flagging",
  decorators: [hideOnChromaticDeco],
}

export const should_be_in_chromatic = () => (
  <div>Just some text, visible in default storybook.</div>
)
