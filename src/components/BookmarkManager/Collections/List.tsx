import {
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable'
import React from 'react'
import { ListItem as ItemType } from '../../utils/types'
import ListItem from './ListItem'

interface ListProps {
  data: ItemType[]
  collectionId: string
}

const List: React.FC<ListProps> = ({ data, collectionId }) => {
  return (
    <SortableContext items={data} strategy={horizontalListSortingStrategy}>
      <div
        className={`w-full min-h-[32px] border border-dashed border-slate-900 flex flex-wrap p-2 gap-2 bg-blue-200`}
      >
        {data.map((item, itemIdx) => {
          return item.collections === collectionId ? (
            <ListItem data={item} itemIndex={itemIdx} key={item.id} />
          ) : null
        })}
      </div>
    </SortableContext>
  )
}

export default List
