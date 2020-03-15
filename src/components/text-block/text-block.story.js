import React from "react"
import TextBlock from "./"

export default {
  title: "components|TextBlock",
  component: TextBlock,
}

export const base = () => <TextBlock headline="Code of Conduct">Text</TextBlock>

export const h1 = () => (
  <TextBlock headline="The Team" headlineComponent="h1">
    We are simple developers organizing this event in our spare time. If you
    have any questions or problems before or during the conference, don't
    hesitate to contact one of us! You can always reach us by E-Mail:
    team@jscraftcamp.org
  </TextBlock>
)

export const withBeforeNode = () => (
  <TextBlock
    headline="Code of Conduct"
    beforeNode={<span style={{ fontSize: 90 }}>🚀</span>}
  >
    Text
  </TextBlock>
)
export const withAfterNode = () => (
  <TextBlock headline="Hello World" afterNode={<button>button</button>}>
    Text
  </TextBlock>
)
export const withBothNodes = () => (
  <TextBlock
    headline="Word"
    beforeNode={<span style={{ fontSize: 90 }}>🚀</span>}
    afterNode={<button>button</button>}
  >
    Text
  </TextBlock>
)
