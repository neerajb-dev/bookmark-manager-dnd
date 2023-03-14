import React from 'react'
import { useDrop } from 'react-dnd'
import itemTypes from '../../utils/itemTypes'
import { CollectionResponse } from '../../utils/types'
import Collection from './Collection'

interface CollectionsContainerProps {
  allCollections: CollectionResponse
}

const CollectionsContainer: React.FC<CollectionsContainerProps> = ({
  allCollections,
}) => {
  const [{ isOver }, collectionDropZone] = useDrop(() => ({
    accept: itemTypes.COLLECTION,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))
  return (
    <div
      ref={collectionDropZone}
      className={`w-full h-full border border-cyan-900 p-2 overflow-y-scroll ${
        isOver ? 'bg-red-300' : 'bg-white'
      }`}
    >
      {allCollections.map((collection) => {
        return <Collection data={collection} key={collection.collection.id} />
      })}
    </div>
  )
}

export default CollectionsContainer
