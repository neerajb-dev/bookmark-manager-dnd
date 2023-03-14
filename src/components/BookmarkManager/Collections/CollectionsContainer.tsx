import React from 'react'
import { useDrop } from 'react-dnd'
import itemTypes from '../../utils/itemTypes'
import Collection from './Collection'

const CollectionsContainer = () => {
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
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
    </div>
  )
}

export default CollectionsContainer
