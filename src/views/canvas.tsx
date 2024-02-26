import React, { useState } from "react"
import { memo } from 'react'

import type { CSSProperties, FC } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from "./elements/ItemTypes"
import { PetCard } from "./elements/PetCard"

const style: CSSProperties = {
    height: '25rem',
    width: '50%',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}

export const Canvas: FC = memo(function Canvas() {
    const [basket, setBasket] = useState<any>([])
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.PET,
        drop: (item) => setBasket((basket: any) =>
            !basket.includes(item) ? [...basket, item] : basket),
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
            <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
                {isActive ? 'Release to drop' : 'Drag a box here'}
                {basket.map((pet: any) => <PetCard key={pet.id} id={pet.id} name={pet.name} />)}
            </div>
        </>
    )
})
