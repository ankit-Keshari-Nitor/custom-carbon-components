import React, { useState } from 'react'
import { memo } from 'react'
import type { FC } from 'react'
import { useDrop } from 'react-dnd'

import './canvas.css'
import { ItemTypes } from '../../../constants/const'
import Element from '../left-container/element'

const Canvas: FC = memo(function Canvas() {
    const [basket, setBasket] = useState<any>([])
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: (item) => setBasket((basket: any) => (!basket.includes(item) ? [...basket, item] : basket)),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    return (
        <>
            <div ref={drop} className="canvas-container" style={{ backgroundColor }} data-testid="dustbin">
                {basket.map((card: any) => (
                    <Element key={card.id} id={card.id} name={card.name} />
                ))}
            </div>
        </>
    )
})

export default Canvas
