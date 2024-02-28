import React from 'react'
import { DatePicker as CarbonDatePicker, DatePickerInput } from '@carbon/react'

export interface DatePickerWrapperProps {
    content?: string
}

const DatePicker: React.FC<DatePickerWrapperProps> = ({ content, ...rest }) => {
    return (
        <div>
            <CarbonDatePicker datePickerType="single" value="07/15/1988">
                <DatePickerInput placeholder="dd/mm/yyyy" id="date-picker-6" labelText="Value as string example" />
            </CarbonDatePicker>
        </div>
    )
}

export default DatePicker
