import React, { useContext } from 'react'
import { BookmarkContext } from '../../common/bookmarkContextProvider'
import SidebarHeader from './SidebarHeader'
import WindowsContainer from './WindowsContainer'

const Sidebar: React.FC<{}> = () => {
  const { showSidebar, openWindows } = useContext(BookmarkContext)
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
