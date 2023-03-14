import React, { useContext } from 'react'
import { SidebarContext } from '../../common/sidebarContextProvider/SidebarContext'
import CollectionsContainer from './CollectionsContainer'

const Collections = () => {
  const { colSpan } = useContext(SidebarContext)
  console.log('collections', colSpan)
  return (
    <div className={`${colSpan} row-[span_8] p-2 lg:${colSpan} border p-2`}>
      <CollectionsContainer />
    </div>
  )
}

export default Collections
