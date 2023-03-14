import React from 'react'
import Tabs from './Tabs'

const Window = () => {
  return (
    <div className={`w-full border border-black p-1 flex flex-col`}>
      <div
        className={`w-full h-10 border border-dashed border-green-600 flex justify-between p-2 mb-1`}
      >
        <span>Window 1</span>
        <button className="align-baseline">^</button>
      </div>
      <Tabs />
    </div>
  )
}

export default Window
