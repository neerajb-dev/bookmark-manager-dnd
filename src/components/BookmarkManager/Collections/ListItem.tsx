import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ListItem as ItemType } from '../../utils/types'

interface ListItemProps {
  data: ItemType
  itemIndex: number
}

const ListItem: React.FC<ListItemProps> = ({ data, itemIndex }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: data.id,
    })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  return (
    <div
      className={`w-32 min-h-[72px] border border-gray-700 bg-green-100`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {data.title}
    </div>
  )
}

export default ListItem
