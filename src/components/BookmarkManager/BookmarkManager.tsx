import React, { useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import SidebarContextProvider from '../common/sidebarContextProvider/SidebarContext'
import { CollectionResponse } from '../utils/types'
import Collections from './Collections'
import Criteria from './Criteria'
import Sidebar from './Sidebar'
import SidebarToggler from './SidebarToggler'
import { collectionData as collectionResponse } from '../../data'

const BookmarkManager: React.FC<{}> = () => {
  const [collectionData, setCollectionData] =
    useState<CollectionResponse>(collectionResponse)

  const handleDragEnd = (result: DropResult) => {
    console.log('result>>>>', result)
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
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
    </DragDropContext>
  )
}

export default BookmarkManager
