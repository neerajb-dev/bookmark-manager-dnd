import React from 'react'
import { OpenWindows } from '../../utils/types'
import Window from './Window'

interface WindowsContainerProps {
  openWindows: OpenWindows
}

const WindowsContainer: React.FC<WindowsContainerProps> = ({ openWindows }) => {
  return (
    <div
      className={`w-full flex-auto border p-2 flex flex-col gap-2  bg-gray-400 overflow-y-auto bg-opacity-20`}
    >
      {openWindows.map((window, windowIdx) => {
        return (
          <Window windowData={window} windowIndex={windowIdx} key={window.id} />
        )
      })}
    </div>
  )
}

export default WindowsContainer
