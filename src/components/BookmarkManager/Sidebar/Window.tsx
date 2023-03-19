import React from 'react'
import { OpenWindow } from '../../utils/types'
import Tabs from './Tabs'

interface WindowProps {
  windowData: OpenWindow
  windowIndex: number
}

const Window: React.FC<WindowProps> = ({ windowData, windowIndex }) => {
  const { tabs } = windowData
  return (
    <div className={`w-full border  p-1 flex flex-col border-gray-300`}>
      <div
        className={`w-full h-10 border border-dashed border-green-600 flex justify-between p-2 mb-1`}
      >
        <span>Window {windowIndex + 1}</span>
        <button className="align-baseline">^</button>
      </div>
      <Tabs openTabs={tabs} />
    </div>
  )
}

export default Window
