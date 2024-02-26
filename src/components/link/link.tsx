import React from 'react';
import { Link as CarbonLink } from '@carbon/react';

export interface LinkProps {
    text: string;
    href: string;
};

const Link: React.FC<LinkProps> = ({ text, href }) => {
    return (<div>
        <CarbonLink href={href}>{text}</CarbonLink>
    </div>);
}

export default Link;