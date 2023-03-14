import React, { useContext } from 'react'
import { SidebarContext } from '../../common/sidebarContextProvider/SidebarContext'

const SidebarToggler: React.FC = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext)
  const rightPosition = showSidebar ? 'right-[17%]' : 'right-[0%]'
  return (
    <button
      className={`absolute top-[50%] ${rightPosition} border-2 bg-emerald-100 h-10 w-10`}
      onClick={() => setShowSidebar(!showSidebar)}
    >
      {showSidebar ? '>' : '<'}
    </button>
  )
}

export default SidebarToggler
