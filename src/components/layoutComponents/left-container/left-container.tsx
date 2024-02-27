import React from 'react'
import type { FC } from 'react'
import { memo } from 'react'
import { COMPONENT_MAPPER } from '../../../constants/const'
import Element from './element'

const LeftContainer: FC = memo(function LeftContainer() {
    return (
        <div>
            {COMPONENT_MAPPER.map((component) => {
                return <Element key={component.id} id={component.id} name={component.name} fieldType={component.fieldType}/>
            })}
        </div>
    )
})

export default LeftContainer
