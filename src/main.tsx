import React from 'react'
import { DndProvider } from 'react-dnd'
import ReactDOM from 'react-dom/client'
import { HTML5Backend } from 'react-dnd-html5-backend'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </React.StrictMode>
)
