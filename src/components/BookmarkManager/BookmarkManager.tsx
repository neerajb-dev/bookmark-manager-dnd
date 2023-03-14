import React from 'react'
import SidebarContextProvider from '../common/sidebarContextProvider/SidebarContext'
import Collections from './Collections'
import Criteria from './Criteria'
import Sidebar from './Sidebar'
import SidebarToggler from './SidebarToggler'

const BookmarkManager: React.FC<{}> = () => {
  return (
    <SidebarContextProvider>
      <div
        className={`h-full w-full grid grid-rows-8 grid-cols-12 p-2 bg-lime-50`}
      >
        <Criteria />
        <Sidebar />
        <Collections />
        <SidebarToggler />
      </div>
    </SidebarContextProvider>
  )
}

export default BookmarkManager
