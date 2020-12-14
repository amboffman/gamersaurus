import React from "react"
import ContentLoader from "react-content-loader"

const CarouselCardPlaceholder = (props) => (
  <ContentLoader 
    speed={2}
    width={266}
    height={457}
    viewBox="0 0 266 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="264" height="352" /> 
    <rect x="6" y="366" rx="0" ry="0" width="254" height="28" />
  </ContentLoader>
)

export default CarouselCardPlaceholder

