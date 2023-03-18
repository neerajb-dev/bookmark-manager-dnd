import React, { createContext, useState } from 'react'
import { CollectionResponse, OpenWindows } from '../../utils/types'
import {
  collectionData as collectionResponse,
  openWindows as allOpenWindows,
} from '../../../data'

export interface BookmarkContext {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
  colSpan: string
  collectionData: CollectionResponse
  setCollectionData: React.Dispatch<React.SetStateAction<CollectionResponse>>
  openWindows: OpenWindows
  setOpenWindows: React.Dispatch<React.SetStateAction<OpenWindows>>
}

interface BookmarkContextProviderProps {
  children: React.ReactNode
}

export const BookmarkContext = createContext<BookmarkContext>(
  {} as BookmarkContext
)

const BookmarkContextProvider: React.FC<BookmarkContextProviderProps> = ({
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
  const [openWindows, setOpenWindows] = useState<OpenWindows>(allOpenWindows)
  const [collectionData, setCollectionData] =
    useState<CollectionResponse>(collectionResponse)
  const colSpan = showSidebar ? 'col-span-10' : 'col-span-12'
  return (
    <BookmarkContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        colSpan,
        collectionData,
        setCollectionData,
        openWindows,
        setOpenWindows,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkContextProvider
