import React, { useState } from 'react'
import { Checkbox as CarbonCheckbox, CheckboxProps } from '@carbon/react'

export interface CheckboxWrapperProps extends CheckboxProps {
    labelText: string
}

const Checkbox: React.FC<CheckboxWrapperProps> = ({ labelText, ...rest }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div>
            <CarbonCheckbox labelText={labelText} checked={isChecked} onChange={(_, { checked }) => setIsChecked(checked)} {...rest} />
        </div>
    )
}

export default Checkbox
