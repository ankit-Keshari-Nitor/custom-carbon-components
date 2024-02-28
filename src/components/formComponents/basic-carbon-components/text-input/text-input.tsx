import React from 'react'
import { TextInput as CarbonTextInput } from '@carbon/react'
import { TextInputProps } from '@carbon/react/lib/components/TextInput/TextInput'

export interface TextFieldWrapperProps extends TextInputProps {
    isRequired?: boolean
}

const TextInput: React.FC<TextFieldWrapperProps> = ({ isRequired, ...rest }) => {
    return (
        <div>
            <CarbonTextInput {...rest} required={isRequired} />
        </div>
    )
}

export default TextInput
