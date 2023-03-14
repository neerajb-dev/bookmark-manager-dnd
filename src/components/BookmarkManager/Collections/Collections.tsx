import React, { useContext } from 'react'
import { SidebarContext } from '../../common/sidebarContextProvider/SidebarContext'
import { CollectionResponse } from '../../utils/types'
import CollectionsContainer from './CollectionsContainer'

interface CollectionsProps {
  data: CollectionResponse
}

const Collections: React.FC<CollectionsProps> = ({ data }) => {
  const { colSpan } = useContext(SidebarContext)
  return (
    <div className={`${colSpan} row-[span_8] p-2 lg:${colSpan} border p-2`}>
      <CollectionsContainer allCollections={data} />
    </div>
  )
}

export default Collections
