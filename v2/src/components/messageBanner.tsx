import React from "react"
import {PageProps} from "gatsby"

type BannerProps = {
    message: string
}

const MessageBanner: React.FC<PageProps<BannerProps>> = ({data}) => (
    <article>
        <p>Here is the message banner that will run across the entire layout</p>
    </article>
)

