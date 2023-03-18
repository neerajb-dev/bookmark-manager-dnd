import React from 'react'
import Collections from './Collections'
import Criteria from './Criteria'
import Sidebar from './Sidebar'
import SidebarToggler from './SidebarToggler'
import BookmarkContextProvider from '../common/bookmarkContextProvider'

const BookmarkManager: React.FC<{}> = () => {
  return (
    <BookmarkContextProvider>
      <div
        className={`h-full w-full grid grid-rows-8 grid-cols-12 p-2 bg-lime-50`}
      >
        <Criteria />
        <Sidebar />
        <Collections />
        <SidebarToggler />
      </div>
    </BookmarkContextProvider>
  )
}

export default BookmarkManager
