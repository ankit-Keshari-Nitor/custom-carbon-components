import React from 'react'
import type { FC } from 'react'
import { useDrag } from 'react-dnd'
import '../left-container.css'
import { CarbonFromComponent, ItemTypes } from '../../../../constants/const'
import { Grid, Column, Tooltip } from '@carbon/react'

const Element: FC<CarbonFromComponent> = function Element({ id, name, fieldType, tooltip, tooltipIcon, fieldIcon }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.ELEMENT,
        item: { id, name, fieldType },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} className={isDragging ? 'drag-field-border' : 'field-border'} style={{ opacity }} data-testid={`box`}>
            <Grid>
                <Column sm={6}>
                    <span>{fieldIcon}</span>
                </Column>
                <Column sm={2}>
                    <span className="field-text">{name}</span>
                </Column>
                <Column sm={6}>
                    <span>
                        <Tooltip label={tooltip}>{tooltipIcon}</Tooltip>
                    </span>
                </Column>
            </Grid>
        </div>
    )
}

export default Element
