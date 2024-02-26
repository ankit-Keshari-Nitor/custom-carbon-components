import React from 'react'
import type { FC } from 'react'
import { memo } from 'react'
import { CARDS } from '../constants/const'
import { Card } from './elements/Card'

export const LeftContainer: FC = memo(function LeftContainer() {
    return (
        <div>
            {CARDS.map((card) => (
                <Card key={card.id} id={card.id} name={card.name} />
            ))}
        </div>
    )
})
