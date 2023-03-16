import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { CollectionResponse } from '../../utils/types'
import Collection from './Collection'

interface CollectionsContainerProps {
  allCollections: CollectionResponse
}

const CollectionsContainer: React.FC<CollectionsContainerProps> = ({
  allCollections,
}) => {
  return (
    <Droppable droppableId="collectionsContainer">
      {(provided, snapshot) => {
        return (
          <div
            className={`w-full h-full border border-cyan-900 p-2 overflow-y-scroll`}
            ref={provided.innerRef}
            {...provided.droppableProps}
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
            {/* placeholder added to remove additional scroll effect added when
            dragging a draggable */}
            {provided.placeholder}
          </div>
        )
      }}
    </Droppable>
  )
}

export default CollectionsContainer
