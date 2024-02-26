import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './app.scss'

import { Container } from './views/container'

const App: React.FC = () => {
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <Container />
            </DndProvider>
        </>
    )
}

export default App
