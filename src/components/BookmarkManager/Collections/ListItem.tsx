import React from 'react'
import { useDrag } from 'react-dnd'
import itemTypes from '../../utils/itemTypes'
import { ListItem as ItemType } from '../../utils/types'

interface ListItemProps {
  data: ItemType
}

const ListItem: React.FC<ListItemProps> = ({ data }) => {
  const [{ isDragging }, listItemDrag] = useDrag(() => ({
    type: itemTypes.LISTITEM,
    item: {
      id: data.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <div
      className={`w-32 min-h-[72px] border border-gray-700 ${
        isDragging ? 'bg-blue-500' : 'bg-gree-100'
      }`}
      ref={listItemDrag}
    >
      {data.title}
    </div>
  )
}

export default ListItem
