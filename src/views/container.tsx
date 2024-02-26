
import React from "react"
import type { FC } from 'react'
import { memo } from 'react'
import { Column, Grid } from "@carbon/react"

import { LeftContainer } from './left-container'
import { RightContainer } from './right-container'
import { Canvas } from './canvas'


export const Container: FC = memo(function Container() {
    return (
        <Grid fullWidth>
            <Column sm={4}>
                <LeftContainer />
            </Column>
            <Column sm={8}>
                <Canvas />
            </Column>
            <Column sm={4}>
                <RightContainer />
            </Column>            
        </Grid>
    )
})
