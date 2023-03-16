import React from 'react'
import { CollectionResponse } from '../../utils/types'
import Collection from './Collection'

interface CollectionsContainerProps {
  allCollections: CollectionResponse
}

const CollectionsContainer: React.FC<CollectionsContainerProps> = ({
  allCollections,
}) => {
  return (
    <div
      className={`w-full h-full border border-cyan-900 p-2 overflow-y-scroll`}
    >
      {allCollections.map((collection, index) => {
        return (
          <Collection
            collectionData={collection}
            key={collection.collection.id}
            colIndex={index}
          />
        )
      })}
    </div>
  )
}

export default CollectionsContainer
