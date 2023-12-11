import React from 'react'
import Navbar from '../../Layout/Navbar'
import Sidebar from '../../Layout/Sidebar/Sidebar'

function Manager() {
  return (
    <div className='flex '>
      <Sidebar />
      <div className='w-full'>
        <Navbar className=""/>
        <main className='max-w-5xl flex-4 mx-auto py-4'></main>
      </div>
    </div>
  )
}

export default Manager
