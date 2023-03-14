import React from 'react'
import Collection from './Collection'

const CollectionsContainer = () => {
  return (
    <div className={`w-full h-full border border-cyan-900 p-2 overflow-y-scroll`}>
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
