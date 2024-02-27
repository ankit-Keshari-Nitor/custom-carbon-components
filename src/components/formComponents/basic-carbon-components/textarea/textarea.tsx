import React from 'react'
import { TextArea as CarbonTextArea } from '@carbon/react'
import { TextAreaProps } from '@carbon/react/lib/components/TextArea/TextArea'

export interface TextAreaWrapperProps extends TextAreaProps {
    content?: string
}

const TextArea: React.FC<TextAreaWrapperProps> = ({ content, ...rest }) => {
    return (
        <div>
            <CarbonTextArea {...rest}>{content}</CarbonTextArea>
        </div>
    )
}

export default TextArea
