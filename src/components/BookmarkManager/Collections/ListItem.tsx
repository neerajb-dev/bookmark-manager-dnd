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
    accept: [itemTypes.LISTITEM, itemTypes.TAB],
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    drop: (item: any, monitor) => {
      const draggedItem = {
        id: item.id,
        index: item.index,
        collectionId: item.collectionId,
      }
      const droppedOn = {
        id: data.id,
        index: itemIndex,
        collectionId: data.collections,
      }
      console.log({
        draggedItem,
        droppedOn,
      })
    },
    // hover: (item: any, monitor) => {
    //   const draggedItem = {
    //     id: item.id,
    //     index: item.index,
    //     collectionId: item.collectionId,
    //   }
    //   const droppedOn = {
    //     id: data.id,
    //     index: itemIndex,
    //     collectionId: data.collections,
    //   }
    //   console.log({
    //     draggedItem,
    //     droppedOn,
    //   })
    // },
  }))

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
