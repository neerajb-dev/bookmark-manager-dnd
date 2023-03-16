import React from 'react'
import { ListItem } from '../../utils/types'
import Item from './Item'

interface ListProps {
  listData: ListItem[]
}

const List: React.FC<ListProps> = ({ listData }) => {
  return (
    <div
      className={`w-full min-h-[32px] border border-dashed border-slate-400 flex flex-wrap p-2 gap-2`}
    >
      {listData.map((listItem, index) => {
        return <Item listItem={listItem} itemIndex={index} />
      })}
    </div>
  )
}

export default List
