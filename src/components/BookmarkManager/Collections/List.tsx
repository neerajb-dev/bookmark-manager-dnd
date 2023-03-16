import React from 'react'
import { useDrop } from 'react-dnd'
import itemTypes from '../../utils/itemTypes'
import { ListItem as ItemType } from '../../utils/types'
import ListItem from './ListItem'

interface ListProps {
  data: ItemType[]
}

const List: React.FC<ListProps> = ({ data }) => {
  const [{ isOver }, listItemDrop] = useDrop({
    accept: [itemTypes.LISTITEM, itemTypes.TAB, itemTypes.WINDOW],
    drop: (item) => {
      console.log(item)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })
  return (
    <div
      className={`w-full min-h-[32px] border border-dashed border-slate-900 flex flex-wrap p-2 gap-2 ${
        isOver ? 'bg-slate-300' : 'bg-blue-200'
      }`}
      ref={listItemDrop}
    >
      {data.map((item, itemIdx) => {
        return <ListItem data={item} itemIndex={itemIdx} key={item.id} />
      })}
    </div>
  )
}

export default List
