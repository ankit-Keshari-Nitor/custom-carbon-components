import React from 'react'
import type { FC } from 'react'
import { useDrag } from 'react-dnd'
import '../left-container.css'
import { ItemTypes } from '../../../../constants/const'

export interface ElementProps {
    id: string
    name: string
}

const Element: FC<ElementProps> = function Box({ id, name }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CARD,
        item: { id, name },
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
