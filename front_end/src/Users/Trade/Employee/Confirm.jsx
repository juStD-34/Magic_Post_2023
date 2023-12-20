import React from 'react'
import Navbar from '../../../shared/Layout/Navbar'
import Sidebar from '../../../shared/Layout/Sidebar/Sidebar'
import { Card } from '@material-tailwind/react'

const Confirm = () => {
  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="h-screen w-[85%] sm:w-full px-auto">
        <Navbar />
        <main className="max-w-4xl flex-4 mx-auto py-2 my-4">
          <Card className="w-full">
            ccc
          </Card>
        </main>
      </div>
    </div>
  )
}

export default Confirm
