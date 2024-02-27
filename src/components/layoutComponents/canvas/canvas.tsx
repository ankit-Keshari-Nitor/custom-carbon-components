import React, { useState } from 'react'
import { memo } from 'react'
import type { FC } from 'react'
import { useDrop } from 'react-dnd'

import './canvas.css'
import { ItemTypes } from '../../../constants/const'
import FormRenderer from '../form-renderer'

const Canvas: FC = memo(function Canvas() {
    const [editor, setEditor] = useState<any>([])

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.ELEMENT,
        drop: (item) => setEditor((editor: any) => [...editor, item]),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver
    let backgroundColor = 'rgb(233 242 244)'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    return (
        <>
            <div ref={drop} className="canvas-container" style={{ backgroundColor }} data-testid="dustbin">
                {editor.map((item: any) => (
                    <FormRenderer key={item.id} id={item.id} name={item.name} fieldType={item.fieldType}/>
                ))}
            </div>
        </>
    )
})

export default Canvas
