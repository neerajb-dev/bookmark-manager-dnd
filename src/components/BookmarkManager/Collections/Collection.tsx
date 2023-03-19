import React, { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Collection as CollectionType, ListItem } from '../../utils/types'
import List from './List'
import { listItems } from '../../../data'

interface CollectionProps {
  collection: CollectionType
}

const Collection: React.FC<CollectionProps> = ({ collection }) => {
  const [listData, setListData] = useState<ListItem[]>(listItems)
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: collection.id,
    })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      className={`w-full border border-black p-1 mb-2 bg-blue-300 bg-opacity-100`}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="w-full h-10 border border-lime-300 mb-1 flex justify-between bg-blue-500">
        <div className="flex justify-between align- border border-slate-500">
          <span>{collection.title}</span>
          <span>{'>'}</span>
        </div>
        <div className="flex justify-between border-slate-500">buttons</div>
      </div>
      <List data={listItems} collectionId={collection.id} />
    </div>
  )
}

export default Collection
