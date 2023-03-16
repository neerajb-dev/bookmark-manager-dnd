import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { CollectionData } from '../../utils/types'
import List from './List'

interface CollectionProps {
  collectionData: CollectionData
  colIndex: number
}

const Collection: React.FC<CollectionProps> = ({
  collectionData,
  colIndex,
}) => {
  const { collection, sortedLists } = collectionData
  return (
    <Draggable draggableId={collection.id} index={colIndex}>
      {(provided, snapshot) => {
        return (
          <div
            className={`w-full border bg-lime-700 border-black p-1 mb-2`}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div
              className="w-full h-10 border bg-lime-400 border-lime-300 mb-1 flex justify-between"
              {...provided.dragHandleProps}
            >
              <div className="flex justify-between align- border border-slate-500">
                <span>{collection.title}</span>
                <span>{'>'}</span>
              </div>
              <div className="flex justify-between border-slate-500">
                buttons
              </div>
            </div>
            <List listData={sortedLists} />
          </div>
        )
      }}
    </Draggable>
  )
}

export default Collection
