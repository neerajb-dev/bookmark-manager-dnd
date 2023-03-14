import React from 'react'
import { useDrop } from 'react-dnd'
import itemTypes from '../../utils/itemTypes'
import { OpenWindows } from '../../utils/types'
import Window from './Window'

interface WindowsContainerProps {
  openWindows: OpenWindows
}

const WindowsContainer: React.FC<WindowsContainerProps> = ({ openWindows }) => {
  const [{ isOver }, windowDrop] = useDrop({
    accept: itemTypes.WINDOW,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })
  return (
    <div
      className={`w-full flex-auto border p-2 flex flex-col gap-2  bg-gray-400 overflow-y-auto ${
        isOver ? 'bg-opacity-100' : 'bg-opacity-20'
      }`}
      ref={windowDrop}
    >
      {openWindows.map((window, windowIdx) => {
        return <Window windowData={window} windowIndex={windowIdx} />
      })}
    </div>
  )
}

export default WindowsContainer
