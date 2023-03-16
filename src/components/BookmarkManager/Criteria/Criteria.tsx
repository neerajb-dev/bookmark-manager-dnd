import React, { useContext, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { ReactSelect } from '../../common/dropdown/react_select'
import { SidebarContext } from '../../common/sidebarContextProvider/SidebarContext'

type ReactSelectOptions = {
  value: number | string
  label: string
}

const Criteria = () => {
  const { colSpan } = useContext(SidebarContext)
  // console.log('criteria', colSpan)
  const [inpVal, setInpVal] = useState('')
  const [expandCollapseValue, setExpandCollapseValue] = useState<any>({
    value: 1,
    label: 'Expand',
  })
  const [viewValue, setViewValue] = useState<ReactSelectOptions>({
    value: 2,
    label: 'Grid',
  })
  const [sort, setSort] = useState<ReactSelectOptions>({
    value: 1,
    label: 'Sort',
  })

  const handleInpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpVal(e.target.value)
    // handleSearchInput(e.target.value)
  }

  return (
    <div className={`${colSpan} row-span-1 lg:${colSpan} border`}>
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex items-center gap-3">
          <input
            className="rounded-md mt-[3px] h-[26px] bg-gray-700 text-white placeholder:text-white border border-white text-xs w-[200px] py-2 px-4"
            type="text"
            placeholder="Search"
            value={inpVal}
            onChange={handleInpChange}
          />
          <div className="w-[100px]">
            <ReactSelect
              isSearch={false}
              options={[
                {
                  value: 1,
                  label: 'List',
                },
                {
                  value: 2,
                  label: 'Grid',
                },
                {
                  value: 3,
                  label: 'Compact',
                },
                {
                  value: 4,
                  label: 'Card',
                },
              ]}
              setData={setViewValue}
              value={viewValue}
            />
          </div>

          <div className="w-[100px]">
            <ReactSelect
              isSearch={false}
              options={[
                {
                  value: 1,
                  label: 'Sort',
                },
                {
                  value: 1,
                  label: 'A to Z',
                },
                {
                  value: 2,
                  label: 'Z to A',
                },
              ]}
              setData={setSort}
              value={sort}
            />
          </div>

          <div className="w-[100px]">
            <ReactSelect
              isSearch={false}
              options={[
                {
                  value: 1,
                  label: 'Expand',
                },
                {
                  value: 2,
                  label: 'Collapse',
                },
              ]}
              setData={setExpandCollapseValue}
              value={expandCollapseValue}
            />
          </div>
          <div>
            <button
              className="py-2 px-4 bg-blue-600 flex items-center gap-2 rounded-full"
              onClick={() => console.log('set show modal state change')}
            >
              <MdAdd className="text-white text-base"></MdAdd>
              <p className="text-white text-xs capitalize"> Add Collections</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Criteria
