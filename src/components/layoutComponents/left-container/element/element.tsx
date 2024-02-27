import React from 'react'
import type { FC } from 'react'
import { useDrag } from 'react-dnd'
import '../left-container.css'
import { CarbonFromComponent, ItemTypes } from '../../../../constants/const'


const Element: FC<CarbonFromComponent> = function Element({ id, name, fieldType }) {
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
        <div ref={drag} className="element" style={{ opacity }} data-testid={`box`}>
            {name}
        </div>
    )
}

export default Element
