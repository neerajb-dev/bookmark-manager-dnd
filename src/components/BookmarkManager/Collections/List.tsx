import React from 'react'
import { ListItem as ItemType } from '../../utils/types'
import ListItem from './ListItem'

interface ListProps {
  data: ItemType[]
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div
      className={`w-full min-h-[32px] border border-dashed border-slate-900 flex flex-wrap p-2 gap-2 bg-blue-200`}
    >
      {data.map((item, itemIdx) => {
        return <ListItem data={item} itemIndex={itemIdx} key={item.id} />
      })}
    </div>
  )
}

export default List
