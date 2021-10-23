import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MessageBanner from "./messageBanner"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MessageBanner title={'From Layout:'} desc={'Here is the description to run across the top of the page'}/>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="index-wrapper flex flex-col items-center max-w-7xl">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
