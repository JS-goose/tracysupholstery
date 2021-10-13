import React from "react"

const Footer: React.FC = () => (
  <footer className="flex justify-between">
    <div>
      ©{" "}
      <a href="https://jonathansexton.me" rel="noreferrer noopener">
        Jonathan Sexton
      </a>{" "}
      {new Date().getFullYear()}
    </div>
    <div>
      Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
