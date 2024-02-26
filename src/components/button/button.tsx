import React from 'react';
import { ButtonProps, Button as CarbonButton } from '@carbon/react';

export interface ButtonWrapperProps extends ButtonProps<any> {
    content: string;
};

const Button: React.FC<ButtonWrapperProps> = ({ content, ...rest }) => {
    return (<div>
        <CarbonButton {...rest}>{content}</CarbonButton>
    </div>);
}

export default Button;