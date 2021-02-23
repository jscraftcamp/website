import React from "react"
import Spacer from "./"

export default {
  title: 'components/Spacer',
  component: Spacer,
}

const SizeComponent = ({ size }) => (
  <div>
    <span>start</span>
    <div style={{ background: "yellow" }}>
      <Spacer size={size} />
    </div>
    <span>end</span>
  </div>
)

export const sizeXs = () => <SizeComponent size="xs" />
export const sizeS = () => <SizeComponent size="s" />
export const sizeM = () => <SizeComponent size="m" />
export const sizeL = () => <SizeComponent size="l" />
export const sizeXL = () => <SizeComponent size="xl" />
export const sizeXXL = () => <SizeComponent size="xxl" />
