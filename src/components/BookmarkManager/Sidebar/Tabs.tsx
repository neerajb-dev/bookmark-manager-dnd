import React from 'react'
import { Tab as TabShape } from '../../utils/types'
import Tab from './Tab'

interface TabsProps {
  openTabs: TabShape[]
}

const Tabs: React.FC<TabsProps> = ({ openTabs }) => {
  return (
    <div
      className={`w-full min-h-[32px] border border-dashed border-blue-400 p-1 bg-blue-400 bg-opacity-40 max-h-[200px] overflow-y-auto`}
    >
      {openTabs.map((tab, tabIdx) => {
        if (tab.title !== 'New Tab') {
          return <Tab tabData={tab} tabIndex={tabIdx} />
        }
      })}
    </div>
  )
}

export default Tabs
