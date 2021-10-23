import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)
  
  return (
    <nav className="flex flex-col items-center justify-between bg-myLightRust text-white">
      <StaticImage
      src="../images/ui/marine-upholstery-wheel.jpg"
      alt="a boat wheel"
      width={1280}
      height={400}
      quality={100}
      placeholder="blurred"
      layout="constrained"
      />
      <div className="flex items-center flex-shrink-0 mr-6 p-2">
        <span className="text-xl font-semibold tracking-tight">
          {siteTitle}
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-myDarkRust border border-white rounded hover:text-myTeal hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`p-2 ${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to={`/`}
            className="block text-xl font-bold mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-myDarkRust"
          >
            Home
          </Link>
          <Link
            to={`/contact`}
            className="block text-xl font-bold mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-myDarkRust"
          >
            Contact
          </Link>
          <Link
            to={`/about`}
            className="block text-xl font-bold mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-myDarkRust"
          >
            About
          </Link>
          <Link
            to={`/services`}
            className="block text-xl font-bold mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-myDarkRust"
          >
            Services
          </Link>
          <Link
            to={`/gallery`}
            className="block text-xl font-bold mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-myDarkRust"
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
