import React from 'react'
import { TextInput as CarbonTextInput } from '@carbon/react'
import { TextInputProps } from '@carbon/react/lib/components/TextInput/TextInput'

export interface TextFieldWrapperProps extends TextInputProps {
    name?: string
    isRequired?: boolean
}

const TextInput: React.FC<TextFieldWrapperProps> = ({ name, isRequired, ...rest }) => {
    return (
        <div>
            <CarbonTextInput {...rest} name={name} required={isRequired} />
        </div>
    )
}

export default TextInput
