
import React from "react"
import type { FC } from 'react'
import { memo } from 'react'
import { PETS } from "../constants/const"
import { PetCard } from "./elements/PetCard"


export const LeftContainer: FC = memo(function LeftContainer() {
    return (
        <div>
            {PETS.map(pet => <PetCard key={pet.id} id={pet.id} name={pet.name} />)}
        </div>

    )
})
