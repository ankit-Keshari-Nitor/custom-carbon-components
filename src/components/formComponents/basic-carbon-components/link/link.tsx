import React from 'react'
import { Link as CarbonLink, LinkProps } from '@carbon/react'

export interface LinkWrapperProps extends LinkProps {
    text?: string
    href?: string
}

const Link: React.FC<LinkWrapperProps> = ({ content, ...rest }) => {
    return (
        <div>
            <CarbonLink {...rest}>{content}</CarbonLink>
        </div>
    )
}

export default Link
