import React from 'react'
import componentTypes from '../../constants/component-types'

const NullComponent = () => <span>Not implemented</span>

const mapper = {
    [componentTypes.TEXT_FIELD]: NullComponent,
    [componentTypes.TEXTAREA]: NullComponent,
    [componentTypes.SELECT]: NullComponent,
    [componentTypes.CHECKBOX]: NullComponent,
    [componentTypes.SUB_FORM]: NullComponent,
    [componentTypes.RADIO]: NullComponent,
    [componentTypes.TABS]: NullComponent,
    [componentTypes.DATE_PICKER]: NullComponent,
    [componentTypes.TIME_PICKER]: NullComponent,
    [componentTypes.WIZARD]: NullComponent,
    [componentTypes.SWITCH]: NullComponent,
    [componentTypes.PLAIN_TEXT]: NullComponent,
    [componentTypes.FIELD_ARRAY]: NullComponent,
    [componentTypes.DUAL_LIST_SELECT]: NullComponent,
    [componentTypes.SLIDER]: NullComponent,
    [componentTypes.LINK]: NullComponent,
    [componentTypes.COMBO_BOX]: NullComponent,
}

export default mapper

export const components = {
    // TextField,
}
