export const ItemTypes = {
    CARD: 'card',
}

export const CARDS = [
    { id: 1, name: 'text field' },
    { id: 2, name: 'textarea' },
    { id: 3, name: 'select' },
    { id: 4, name: 'checkbox' },
]

export enum FieldType {
    Button = 'Button',
    Link = 'Link',
    InputInput = 'InputInput',
    TextArea = 'TextArea',
}

export interface CarbonFromComponent {
    id: string
    name: string
    fieldType: FieldType
}

export const COMPONENT_MAPPER: Readonly<CarbonFromComponent[]> = Object.freeze([
    { id: 'button', name: 'Button', fieldType: FieldType.Button },
    { id: 'link', name: 'Link', fieldType: FieldType.Link },
    { id: 'text-input', name: 'Text Input', fieldType: FieldType.InputInput },
    { id: 'textarea', name: 'Text Area', fieldType: FieldType.TextArea },
])
