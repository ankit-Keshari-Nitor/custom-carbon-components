import React from 'react'
import type { FC } from 'react'
import { memo } from 'react'
import Element from './element'
import { Accordion, AccordionItem } from '@carbon/react'
import { COMPONENT_MAPPER } from '../../../constants/const'

const LeftContainer: FC = memo(function LeftContainer() {
    return (
        <Accordion className="custom-class">
            <AccordionItem title="Basic" open>
                {COMPONENT_MAPPER.map((component) => {
                    return (
                        <Element
                            id={component.id}
                            name={component.name}
                            fieldType={component.fieldType}
                            tooltip={component.tooltip}
                            tooltipIcon={component.tooltipIcon}
                            fieldIcon={component.fieldIcon}
                        />
                    )
                })}
            </AccordionItem>
            <AccordionItem title="Custom">
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
