import { UseOutsideClick } from '../../utils/UseOutsideClick'
import React, { ChangeEvent, useState } from 'react'

interface OptionsProps {
  value: { value: number | string; label: string }
  updateValue: (opt: { value: number | string; label: string }) => void
  options: { value: number | string; label: string }[]
  isSearch: boolean
  setSearchValue: (data: string) => void
  setSearchOpt: React.Dispatch<
    React.SetStateAction<
      {
        value: number | string
        label: string
      }[]
    >
  >
}

const SelectOption = ({
  value,
  updateValue,
  options,
  isSearch,
  setSearchValue,
  setSearchOpt,
}: OptionsProps) => {
  const handleChange = () => {
    updateValue(value)
    if (isSearch == true) {
      setSearchValue('')
      const initialTimeZones = options.filter((res) =>
        (res.value as string).toLowerCase().includes('asia')
      )
      setSearchOpt([...initialTimeZones])
    }
  }

  return (
    <div role="presentation" onClick={handleChange}>
      <li className="text-white w-full cursor-default hover:bg-gray-500 select-none relative py-2 px-3">
        <div className="flex items-center w-[90%]">
          <span className="ml-1 block text-xs font-normal">{value.label}</span>
        </div>
      </li>
    </div>
  )
}

interface SelectProps {
  name?: string
  isSearch: boolean
  value: { value: number | string; label: string }
  options: { value: number | string; label: string }[]
  setData: (data: { value: number | string; label: string }) => void
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ReactSelect = ({
  name,
  isSearch,
  value,
  options,
  setData,
}: SelectProps) => {
  const [state, setState] = useState<{ showOptions: boolean }>({
    showOptions: false,
  })

  const [sortOpt, setSortOpt] =
    useState<{ value: number | string; label: string }[]>(options)

  const [searchValue, setSearchValue] = useState<string>('')

  const handleClick = () => {
    setState((p) => ({ ...p, showOptions: !state.showOptions }))
    if (isSearch == true) {
      setSearchValue('')
      setData({ value: 0, label: 'Select time zone' })
      const initialTimeZones = options.filter((res) =>
        (res.value as string).toLowerCase().includes('europe')
      )
      setSortOpt([...initialTimeZones])
    }
  }

  const updateValue = (value: { value: number | string; label: string }) => {
    setData(value)
    setSearchValue('')
    setState({ showOptions: false })
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    const searchOp = e.target.value
    const findopt = searchOp.toUpperCase()
    const filteropt = options.filter((opt) =>
      opt.label.toUpperCase().includes(findopt)
    )
    setSortOpt(filteropt)
  }

  return (
    <UseOutsideClick
      onOutsideClick={() => {
        setState({ showOptions: false })
        if (isSearch == true) {
          setSearchValue('')
          const initialTimeZones = options.filter((res) =>
            (res.value as string).toLowerCase().includes('asia')
          )
          setSortOpt([...initialTimeZones])
        }
      }}
    >
      <div className="mt-1 relative">
        <button
          type="button"
          className="transition relative appearance-none w-full bg-gray-700 border border-gray-200 text-white py-[5px] px-2 pr-8 rounded leading-tight focus:outline-none"
          onClick={handleClick}
        >
          <span className="flex items-center">
            <span className="block truncate">{value.label}</span>
          </span>
          <span className="ml-3 absolute text-white inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {
              <svg
                className="h-5 w-5 text-white"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            }
          </span>
        </button>
        {state.showOptions && (
          <div className="h-[148px] absolute bg-gray-700 mt-1 w-full z-10 rounded-md shadow-lg">
            <ul className="h-[148px] max-h-56 overflow-auto overflow-x-hidden rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {isSearch ? (
                <input
                  type="text"
                  className="bg-gray-700 border border-gray-200 text-white h-[29px] px-2 w-[90%] mx-3 mb-2 rounded text-sm focus:outline-none "
                  placeholder="Search here"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              ) : (
                ''
              )}
              {sortOpt.length > 0 &&
                sortOpt.map((option, idx) => (
                  <SelectOption
                    key={idx}
                    value={option}
                    updateValue={updateValue}
                    setSearchValue={setSearchValue}
                    options={options}
                    setSearchOpt={setSortOpt}
                    isSearch={isSearch}
                  />
                ))}
            </ul>
          </div>
        )}
      </div>
    </UseOutsideClick>
  )
}
