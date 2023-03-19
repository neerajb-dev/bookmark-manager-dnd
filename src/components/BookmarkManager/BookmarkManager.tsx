import React, { useState } from 'react'
import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core'
import Collections from './Collections'
import Criteria from './Criteria'
import Sidebar from './Sidebar'
import SidebarToggler from './SidebarToggler'
import BookmarkContextProvider from '../common/bookmarkContextProvider'
import { collections } from '../../data'
import { arrayMove } from '@dnd-kit/sortable'
import { Collection } from '../utils/types'

const BookmarkManager: React.FC<{}> = () => {
  const [collectionList, setCollectionList] = useState(collections)

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e
    if (active.id !== over?.id) {
      setCollectionList((items: Collection[]) => {
        const activeIdx = items.findIndex((obj) => obj.id === active.id)
        const overIdx = items.findIndex((obj) => obj.id === over?.id)
        return arrayMove(items, activeIdx, overIdx)
      })
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <BookmarkContextProvider>
        <div
          className={`h-full w-full grid grid-rows-8 grid-cols-12 p-2 bg-lime-50`}
        >
          <Criteria />
          <Sidebar />
          <Collections collections={collectionList} />
          <SidebarToggler />
        </div>
      </BookmarkContextProvider>
    </DndContext>
  )
}

export default BookmarkManager
