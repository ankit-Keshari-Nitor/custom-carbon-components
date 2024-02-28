import React from 'react'
import { Key, ReactElement } from 'react'
import { Button, Checkbox, DatePicker, Link, TextArea, TextInput } from '../components/formComponents/basic-carbon-components'
import {
    CloudSatellite,
    IbmWatsonKnowledgeStudio,
    IbmWatsonLanguageTranslator,
    Information,
    SkipBackOutlineSolid,
    TextFill,
    Checkbox as IconCheckbox,
    CalendarHeatMap,
} from '@carbon/icons-react'

export const ItemTypes = {
    ELEMENT: 'element',
}

export enum FieldType {
    Button = 'Button',
    Link = 'Link',
    TextInput = 'TextInput',
    TextArea = 'TextArea',
    Checkbox = 'Checkbox',
    DatePicker = 'DatePicker',
}

export interface CarbonFromComponent {
    id: string
    name: string
    fieldType: FieldType
    component?: React.ElementType
    tooltip: String
    tooltipIcon: ReactElement<any>
    fieldIcon: React.ReactNode
}

export const COMPONENT_MAPPER: Readonly<CarbonFromComponent[]> = Object.freeze([
    {
        id: 'button',
        name: 'Button',
        fieldType: FieldType.Button,
        component: Button,
        fieldIcon: <SkipBackOutlineSolid />,
        tooltip: 'Form Button',
        tooltipIcon: <Information />,
    },
    {
        id: 'link',
        name: 'Link',
        fieldType: FieldType.Link,
        component: Link,
        fieldIcon: <CloudSatellite />,
        tooltip: 'Form Link',
        tooltipIcon: <Information />,
    },
    {
        id: 'text-input',
        name: 'Text Input',
        fieldType: FieldType.TextInput,
        component: TextInput,
        fieldIcon: <IbmWatsonKnowledgeStudio />,
        tooltip: 'Form Text Input',
        tooltipIcon: <Information />,
    },
    {
        id: 'textarea',
        name: 'Text Area',
        fieldType: FieldType.TextArea,
        component: TextArea,
        fieldIcon: <IbmWatsonLanguageTranslator />,
        tooltip: 'Form Text Area',
        tooltipIcon: <Information />,
    },
    {
        id: 'checkbox',
        name: 'Checkbox',
        fieldType: FieldType.Checkbox,
        component: Checkbox,
        fieldIcon: <IconCheckbox />,
        tooltip: 'Form Checkbox',
        tooltipIcon: <Information />,
    },
    {
        id: 'datePicker',
        name: 'DatePicker',
        fieldType: FieldType.DatePicker,
        component: DatePicker,
        fieldIcon: <CalendarHeatMap />,
        tooltip: 'Form DatePicker',
        tooltipIcon: <Information />,
    },
])
