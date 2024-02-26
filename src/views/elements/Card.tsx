import React from 'react'
import type { CSSProperties, FC } from 'react'
import { useDrag } from 'react-dnd'

import { ItemTypes } from './ItemTypes'

const style: CSSProperties = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
    color: '#343434',
}

export interface CardProps {
    id: number
    name: string
}

export const Card: FC<CardProps> = function Box({ id, name }) {
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
        <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
            {name}
            {isDragging && '😱'}
        </div>
    )
}
