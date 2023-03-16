import React from 'react'
import { ListItem } from '../../utils/types'

interface ItemProps {
  listItem: ListItem
  itemIndex: number
}

const Item: React.FC<ItemProps> = ({ listItem, itemIndex }) => {
  return (
    <div className="w-32 min-h-[72px] border border-gray-700">
      {listItem.title}
    </div>
  )
}

export default Item
