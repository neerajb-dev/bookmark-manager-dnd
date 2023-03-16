import React from 'react'
import { CollectionData } from '../../utils/types'
import List from './List'

interface CollectionProps {
  collectionData: CollectionData
  colIndex: number
}

const Collection: React.FC<CollectionProps> = ({
  collectionData,
  colIndex,
}) => {
  const { collection, sortedLists } = collectionData
  return (
    <div className={`w-full border border-black p-1 mb-2`}>
      <div className="w-full h-10 border border-lime-300 mb-1 flex justify-between">
        <div className="flex justify-between align- border border-slate-500">
          <span>{collection.title}</span>
          <span>{'>'}</span>
        </div>
        <div className="flex justify-between border-slate-500">buttons</div>
      </div>
      <List listData={sortedLists} />
    </div>
  )
}

export default Collection
