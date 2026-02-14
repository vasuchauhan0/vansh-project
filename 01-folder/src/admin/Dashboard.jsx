import React from 'react'
import System_overview from '../Components/System_overview'

const Dashboard = () => {
  return (
    <div className="p-8">

      {/* Welcome Heading */}
      <h1 className="text-2xl text-[#e8e8e8] font-bold tracking-tight">
        <span className="text-[#00ff41] mr-2">{">"}</span>
        Welcome back,{" "}
        <span className="text-white border-b-2 border-[#00ff41] pb-1">
          admin_root
        </span>
      </h1>

      {/* Metrics Section */}
      <div className="mt-10">
        <System_overview/>
      </div>

    </div>



  )
}

export default Dashboard