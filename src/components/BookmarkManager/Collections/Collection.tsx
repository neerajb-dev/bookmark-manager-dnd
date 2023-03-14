import React from 'react'
import List from './List'

const Collection = () => {
  return (
    <div className={`w-full border border-black p-1 mb-2`}>
      <div className="w-full h-10 border border-lime-300 mb-1 flex justify-between">
        <div className="flex justify-between align- border border-slate-500">
          <span>Collection 1</span>
          <span>{'>'}</span>
        </div>
        <div className="flex justify-between border-slate-500">buttons</div>
      </div>
      <List />
    </div>
  )
}

export default Collection
