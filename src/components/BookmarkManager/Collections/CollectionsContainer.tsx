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
      className={`w-full h-full border border-cyan-900 p-2 overflow-y-scroll bg-white`}
    >
      {allCollections.map((collection) => {
        return <Collection data={collection} key={collection.collection.id} />
      })}
    </div>
  )
}

export default CollectionsContainer
