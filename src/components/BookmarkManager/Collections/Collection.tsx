import React from 'react'
import { useDrag } from 'react-dnd'
import itemTypes from '../../utils/itemTypes'
import { CollectionData } from '../../utils/types'
import List from './List'

interface CollectionProps {
  data: CollectionData
}

const Collection: React.FC<CollectionProps> = ({ data }) => {
  const { collection, sortedLists } = data

  const [{ isDragging }, collectionDraggable] = useDrag(() => ({
    type: itemTypes.COLLECTION,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging,
    }),
  }))

  return (
    <div
      className={`w-full border border-black p-1 mb-2 bg-blue-800 ${
        isDragging ? 'bg-opacity-50' : 'bg-opacity-100'
      }`}
      ref={collectionDraggable}
    >
      <div className="w-full h-10 border border-lime-300 mb-1 flex justify-between">
        <div className="flex justify-between align- border border-slate-500">
          <span>Collection {collection.title}</span>
          <span>{'>'}</span>
        </div>
        <div className="flex justify-between border-slate-500">buttons</div>
      </div>
      <List data={sortedLists} />
    </div>
  )
}

export default Collection
