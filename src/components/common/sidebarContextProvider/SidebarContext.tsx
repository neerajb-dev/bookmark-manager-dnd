import React, { createContext, useState } from 'react'

export interface SidebarContext {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
  colSpan: string
}

interface SidebarContextProvider {
  children: React.ReactNode
}

export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
)

const SidebarContextProvider: React.FC<SidebarContextProvider> = ({
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const colSpan = showSidebar ? 'col-span-10' : 'col-span-12'
  // console.log('sidebarContext', colSpan)
  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar, colSpan }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
