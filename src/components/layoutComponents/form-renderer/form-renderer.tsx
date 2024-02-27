import React from 'react'
import type { FC } from 'react'
import { memo } from 'react'
import { CarbonFromComponent, FieldType } from '../../../constants/const'
import { Button, Link, TextInput, TextArea } from '../../formComponents/basic-carbon-components'

const FromRenderer: FC<CarbonFromComponent> = memo(function FromRenderer({ id, name, fieldType }) {
    let renderInput = null

    if (fieldType == FieldType.Button) {
        renderInput = <Button />
    } else if (fieldType == FieldType.Link) {
        renderInput = <Link content={name} href="https://www.data-driven-forms.org/editor/live-editor" />
    } else if (fieldType == FieldType.TextInput) {
        renderInput = <TextInput id={id} labelText={name} />
    } else if (fieldType == FieldType.TextArea) {
        renderInput = <TextArea labelText={name} />
    }
    return renderInput
})

export default FromRenderer
