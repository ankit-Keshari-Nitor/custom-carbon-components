import React from 'react'
import { Link as CarbonLink, LinkProps } from '@carbon/react'

export interface LinkWrapperProps extends LinkProps {
    content?: string
    href?: string
}

const Link: React.FC<LinkWrapperProps> = ({ content, href, ...rest }) => {
    return (
        <div>
            <CarbonLink {...rest} href={href}>
                {content}
            </CarbonLink>
        </div>
    )
}

export default Link
