import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'

function RootLayout({children}) {
  return (
    <div className='flex '>
      <Sidebar />
      <div className='w-full'>
        <Navbar className=""/>
        <main className='max-w-5xl flex-4 mx-auto py-4'>{children}</main>
      </div>
    </div>
  )
}

export default RootLayout
