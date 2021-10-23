import React from "react"
import PropTypes from "prop-types"

const MessageBanner = ({ title, desc }) => (
  <article className="flex max-w-7xl justify-between">
    <div className="flex">
      <h4 className="px-2">{title}</h4>
      <p>{desc}</p>
    </div>
    <button type="button">Close</button>
  </article>
)

MessageBanner.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default MessageBanner
