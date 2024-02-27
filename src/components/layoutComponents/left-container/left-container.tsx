import React from 'react'
import type { FC } from 'react'
import { memo } from 'react'
import { COMPONENT_MAPPER } from '../../../constants/const'
import Element from './element'
import { Accordion, AccordionItem } from '@carbon/react'

const LeftContainer: FC = memo(function LeftContainer() {
    return (
        <Accordion>
            <AccordionItem title="Basic Component" open>
                {COMPONENT_MAPPER.map((component) => {
                    return <Element key={component.id} id={component.id} name={component.name} fieldType={component.fieldType} />
                })}
            </AccordionItem>
            <AccordionItem title="Custom Component">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </AccordionItem>
        </Accordion>
    )
})

export default LeftContainer
