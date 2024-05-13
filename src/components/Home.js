import React from 'react'
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div className=' w-full pt-1 md:pt-5 sm:pt-3 flex flex-col items-center'>
    <h1 className="  text-center text-md sm:text-4xl md:text-5xl text-primary font-arial font-bold">Emergease:Reporting Application</h1>
    <Outlet/>
    </div>
  )
}
export default Home;

