import React from 'react'

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 bg-blue-400 h-full w-100 rounded-4xl">
    <div className="flex justify-between items-center p-8">
      <h2 className="flex justify-center bg-red-600 w-15 items-center rounded font-semibold">
        High
      </h2>
      <h4 className="font-semibold text-sm">16 Feb</h4>
    </div>
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Develope A WebApp</h1>
      <h3 className="mt-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        accusamus culpa voluptatibus accusantium aperiam libero doloremque
        labore repellendus quam numquam.
      </h3>
    </div>
    <div className='flex justify-center'>
        <button className='bg-green-600 mt-7 py-1 px-2 font-bold rounded'>Mark Completed</button>
    </div>
  </div>
  )
}

export default AcceptTask
