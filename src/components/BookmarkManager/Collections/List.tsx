import React from 'react'
import Item from './Item'

const List = () => {
  return (
    <div
      className={`w-full min-h-[32px] border border-dashed border-slate-400 flex flex-wrap p-2 gap-2`}
    >
      <Item />
      <Item />
    </div>
  )
}

export default List
