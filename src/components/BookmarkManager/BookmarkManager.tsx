import React, { useState } from 'react'
import SidebarContextProvider from '../common/sidebarContextProvider/SidebarContext'
import Collections from './Collections'
import Criteria from './Criteria'
import Sidebar from './Sidebar'
import SidebarToggler from './SidebarToggler'
import { collectionData as collectionResponse } from '../../data'
import { CollectionResponse } from '../utils/types'

const BookmarkManager: React.FC<{}> = () => {
  const [collectionData, setCollectionData] =
    useState<CollectionResponse>(collectionResponse)

  return (
    <SidebarContextProvider>
      <div
        className={`h-full w-full grid grid-rows-8 grid-cols-12 p-2 bg-lime-50`}
      >
        <Criteria />
        <Sidebar />
        <Collections data={collectionData} />
        <SidebarToggler />
      </div>
    </SidebarContextProvider>
  )
}

export default BookmarkManager
