import React from 'react'
import { ListItem as ItemType } from '../../utils/types'

interface ListItemProps {
  data: ItemType
  itemIndex: number
}

const ListItem: React.FC<ListItemProps> = ({ data, itemIndex }) => {
  return (
    <div className={`w-32 min-h-[72px] border border-gray-700 bg-green-100`}>
      {data.title}
    </div>
  )
}

export default ListItem
