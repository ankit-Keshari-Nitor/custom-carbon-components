import React from 'react'
import type { FC } from 'react'
import { memo } from 'react'
import { Column, Grid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@carbon/react'

import { Canvas, LeftContainer, RightContainer } from '../components/layoutComponents'

export const Container: FC = memo(function Container() {
    return (
        <>
            <Tabs>
                <TabList aria-label="List of tabs" activation="manual">
                    <Tab>Edit</Tab>
                    <Tab>PreView</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid>
                            <Column lg={4} md={4} sm={4}>
                                <LeftContainer />
                            </Column>
                            <Column lg={8} md={8} sm={8}>
                                <Canvas />
                            </Column>
                            <Column lg={4} md={4} sm={4}>
                                <RightContainer />
                            </Column>
                        </Grid>
                    </TabPanel>
                    <TabPanel>PreView</TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
})
