import React from "react"
import TextBlock from "./"

export default {
  title: "components|TextBlock",
  component: TextBlock,
}

export const base = () => <TextBlock headline="Code of Conduct">Text</TextBlock>
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
