import React from 'react'
import { useDrop } from 'react-dnd'
import itemTypes from '../../utils/itemTypes'
import { Tab as TabShape } from '../../utils/types'
import Tab from './Tab'

interface TabsProps {
  openTabs: TabShape[]
}

const Tabs: React.FC<TabsProps> = ({ openTabs }) => {
  const [{ isOver }, tabDrop] = useDrop({
    accept: itemTypes.TAB,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })
  return (
    <div
      className={`w-full min-h-[32px] border border-dashed border-blue-400 p-1 bg-blue-400  max-h-[200px] overflow-y-auto ${
        isOver ? 'bg-opacity-100' : 'bg-opacity-40'
      }`}
      ref={tabDrop}
    >
      {openTabs.map((tab, tabIdx) => {
        if (tab.title !== 'New Tab') {
          return <Tab tabData={tab} tabIndex={tabIdx} key={tab.id} />
        }
      })}
    </div>
  )
}

export default Tabs
