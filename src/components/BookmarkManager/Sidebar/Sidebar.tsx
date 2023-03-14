import React, { useContext } from 'react'
import { SidebarContext } from '../../common/sidebarContextProvider/SidebarContext'
import SidebarHeader from './SidebarHeader'
import WindowsContainer from './WindowsContainer'

const Sidebar = () => {
  const { showSidebar } = useContext(SidebarContext)
  return (
    <div
      className={`col-span-2 row-[span_8] p-2 border flex flex-col ${
        !showSidebar ? 'hidden' : 'block'
      }`}
    >
      <SidebarHeader />
      <WindowsContainer />
    </div>
  )
}

export default Sidebar
