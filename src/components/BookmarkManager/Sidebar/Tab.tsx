import React from 'react'
import { useDrag } from 'react-dnd'
import itemTypes from '../../utils/itemTypes'
import { Tab as TabShape } from '../../utils/types'

interface TabProps {
  tabData: TabShape
  tabIndex: number
}

const Tab: React.FC<TabProps> = ({ tabData, tabIndex }) => {
  const [{ isDragging }, tabDrag] = useDrag(() => ({
    type: itemTypes.TAB,
    item: {
      id: tabData.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <div
      className={`w-full h-8 border border-orange-400 bg-orange-400 text-white flex justify-between p-1 mb-2 ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
      ref={tabDrag}
    >
      <span>{tabData?.title?.slice(0, 10)}</span>
      <span>X</span>
    </div>
  )
}

export default Tab
