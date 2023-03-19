import React, { useContext } from 'react'
import { BookmarkContext } from '../../common/bookmarkContextProvider'
import { Collection } from '../../utils/types'
import CollectionsContainer from './CollectionsContainer'

interface CollectionsProps {
  collections: Collection[]
}

const Collections: React.FC<CollectionsProps> = ({ collections }) => {
  const { colSpan } = useContext(BookmarkContext)
  return (
    <div className={`${colSpan} row-[span_8] p-2 lg:${colSpan} border p-2`}>
      <CollectionsContainer allCollections={collections} />
    </div>
  )
}

export default Collections
