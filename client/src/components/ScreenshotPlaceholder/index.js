import React from "react"
import ContentLoader from "react-content-loader"

const ScreenshotPlaceholder = (props) => (
  <ContentLoader 
    speed={2}
    width={646}
    height={363}
    viewBox="0 0 646 363"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="646" height="363" />
  </ContentLoader>
)

export default ScreenshotPlaceholder