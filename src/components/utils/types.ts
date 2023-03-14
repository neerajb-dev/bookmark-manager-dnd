export interface Collection {
  id: string
  name: string
  title: string
  deleted: boolean
  space: string
  user: string
}

export interface SortedLists {
  id: string
  name: string
  title: string
  description: string
  url: string
  deleted: boolean
  collections: string
  user: string
}

export interface CollectionData {
  collection: Collection
  sortedLists: SortedLists[]
}

export interface Tab {
  active: boolean
  audible: boolean
  autoDiscardable: boolean
  discarded: boolean
  favIconUrl: string
  groupId: number
  height: number
  highlighted: boolean
  id: number
  incognito: boolean
  index: number
  mutedInfo: { muted: boolean }
  pinned: boolean
  selected: boolean
  status: string
  title: string
  url: string
  width: number
  windowId: number
}

export interface OpenWindow {
  alwaysOnTop: boolean
  focused: boolean
  height: number
  id: number
  incognito: boolean
  left: number
  state: string
  tabs: Tab[] | {}[]
  top: number
  type: string
  width: number
}

export type OpenWindows = OpenWindow[]

export type CollectionResponse = CollectionData[]

export {}
