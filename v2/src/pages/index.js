import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SEO from "../components/seo"

const IndexPage = () => (
  <div className="index-wrapper flex flex-col items-center">
    <SEO title="Home" />
    <div>hello from index</div>
  </div>
)

export default IndexPage
