import React from "react"

const MessageBanner = ({ data }) => (
  <article className="flex items-center justify-center w-full">
    <h4 className="px-2">{data.title}</h4>
    <p>{data.desc}</p>
  </article>
)

export default MessageBanner
