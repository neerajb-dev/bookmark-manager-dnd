import React from 'react'
import { Tab as TabShape } from '../../utils/types'

interface TabProps {
  tabData: TabShape
  tabIndex: number
}

const Tab: React.FC<TabProps> = ({ tabData, tabIndex }) => {
  const { title } = tabData
  return (
    <div
      className={`w-full h-8 border border-orange-400 bg-orange-400 text-white flex justify-between p-1 mb-2`}
    >
      <span>{title}</span>
      <span>X</span>
    </div>
  )
}

export default Tab
