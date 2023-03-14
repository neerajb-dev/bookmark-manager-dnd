import React, { useContext } from 'react'
import { SidebarContext } from '../../common/sidebarContextProvider/SidebarContext'

const Sidebar = () => {
  const { showSidebar } = useContext(SidebarContext)
  return (
    <div
      className={`col-span-2 row-[span_8] p-2 border ${
        !showSidebar ? 'hidden' : 'block'
      }`}
    >
      Sidebar
    </div>
  )
}

export default Sidebar
