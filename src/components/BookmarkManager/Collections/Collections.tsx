import React, { useContext } from 'react'
import { BookmarkContext } from '../../common/bookmarkContextProvider'
import CollectionsContainer from './CollectionsContainer'

const Collections: React.FC<{}> = () => {
  const { colSpan, collectionData } = useContext(BookmarkContext)
  return (
    <div className={`${colSpan} row-[span_8] p-2 lg:${colSpan} border p-2`}>
      <CollectionsContainer allCollections={collectionData} />
    </div>
  )
}

export default Collections
