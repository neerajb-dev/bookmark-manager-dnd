import React from 'react'
import { Collection as CollectionType } from '../../utils/types'
import Collection from './Collection'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

interface CollectionsContainerProps {
  allCollections: CollectionType[]
}

const CollectionsContainer: React.FC<CollectionsContainerProps> = ({
  allCollections,
}) => {
  return (
    <div
      className={`w-full h-full border border-cyan-900 p-2 overflow-y-scroll bg-white`}
    >
      <SortableContext
        items={allCollections}
        strategy={verticalListSortingStrategy}
      >
        {allCollections.map((collection) => {
          return <Collection collection={collection} key={collection.id} />
        })}
      </SortableContext>
    </div>
  )
}

export default CollectionsContainer
