import React from "react"
import ContentLoader from "react-content-loader"

const CoverPlaceholder = (props) => (
    <ContentLoader
    speed={2}
    width={264}
    height={352}
    viewBox="0 0 264 352"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="264" height="352" />
    </ContentLoader>
)

export default CoverPlaceholder