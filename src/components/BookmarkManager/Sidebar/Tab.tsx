import React from 'react'
import { Tab as TabShape } from '../../utils/types'

interface TabProps {
  tabData: TabShape
  tabIndex: number
}

const Tab: React.FC<TabProps> = ({ tabData, tabIndex }) => {
  return (
    <div
      className={`w-full h-8 border border-orange-400 bg-orange-400 text-white flex justify-between p-1 mb-2 opacity-100`}
    >
      <span>{tabData?.title?.slice(0, 10)}</span>
      <span>X</span>
    </div>
  )
}

export default Tab
