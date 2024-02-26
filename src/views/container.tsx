import React from 'react'
import type { FC } from 'react'
import { memo } from 'react'
import { Column, Grid } from '@carbon/react'

import { LeftContainer } from './left-container'
import { RightContainer } from './right-container'
import { Canvas } from './canvas'

export const Container: FC = memo(function Container() {
    return (
        <Grid fullWidth>
            <Column lg={2} md={2} sm={2}>
                <LeftContainer />
            </Column>
            <Column lg={10} md={10} sm={10}>
                <Canvas />
            </Column>
            <Column lg={4} md={4} sm={4}>
                <RightContainer />
            </Column>
        </Grid>
    )
})
