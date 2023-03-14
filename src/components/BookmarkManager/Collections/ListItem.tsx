import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import itemTypes from '../../utils/itemTypes'
import { ListItem as ItemType } from '../../utils/types'

interface ListItemProps {
  data: ItemType
  itemIndex: number
}

const ListItem: React.FC<ListItemProps> = ({ data, itemIndex }) => {
  const [{ isDragging }, listItemDrag] = useDrag(() => ({
    type: itemTypes.LISTITEM,
    item: {
      id: data.id,
      index: itemIndex,
      collectionId: data.collections,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const [{ handlerId }, listItemHover] = useDrop(() => ({
    accept: itemTypes.LISTITEM,
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover: (item: any, monitor) => {
      const draggedItem = {
        draggedItemIndex: item.index,
        collectionId: item.collectionId,
      }
      const dropTarget = {
        droppedItemIndex: itemIndex,
        collectionId: data.collections,
      }
      console.warn('swapping position of list items', {
        draggedItem,
        dropTarget,
      })
    },
  }))

  console.log('handlerId', handlerId)

  return (
    <div
      className={`w-32 min-h-[72px] border border-gray-700 ${
        isDragging ? 'bg-blue-500' : 'bg-gree-100'
      }`}
      ref={(node) => listItemDrag(listItemHover(node))}
    >
      {data.title}
    </div>
  )
}

export default ListItem
