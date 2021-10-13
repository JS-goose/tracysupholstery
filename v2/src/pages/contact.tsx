import React from "react"
import { PageProps, Link } from "gatsby"

import SEO from "../components/seo"

const Contact = (props: PageProps) => (
  <section>
    <SEO title="Contact" />
    <h1>Hi from the Contact page</h1>
    <p>Welcome to the Contact Page ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </section>
)

export default Contact
