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
}

export const COMPONENT_MAPPER: Readonly<CarbonFromComponent[]> = Object.freeze([
    { id: 'button', name: 'Button', fieldType: FieldType.Button },
    { id: 'link', name: 'Link', fieldType: FieldType.Link },
    { id: 'text-input', name: 'Text Input', fieldType: FieldType.TextInput },
    { id: 'textarea', name: 'Text Area', fieldType: FieldType.TextArea },
    { id: 'checkbox', name: 'Checkbox', fieldType: FieldType.Checkbox },
    { id: 'datePicker', name: 'DatePicker', fieldType: FieldType.DatePicker },
])
