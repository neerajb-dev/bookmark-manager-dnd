import React, { useContext, useState } from 'react'
import { openWindows as openWindowsData } from '../../../data'
import { SidebarContext } from '../../common/sidebarContextProvider/SidebarContext'
import { OpenWindows } from '../../utils/types'
import SidebarHeader from './SidebarHeader'
import WindowsContainer from './WindowsContainer'

const Sidebar = () => {
  const { showSidebar } = useContext(SidebarContext)
  const [openWindows, setOpenWindows] = useState<OpenWindows>(openWindowsData)
  return (
    <div
      className={`col-span-2 row-[span_8] p-2 border flex flex-col ${
        !showSidebar ? 'hidden' : 'block'
      }`}
    >
      <SidebarHeader />
      <WindowsContainer openWindows={openWindows} />
    </div>
  )
}

export default Sidebar
