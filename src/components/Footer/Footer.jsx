import React from 'react'
import logo from "../../assets/images/SOne_index_logos.png";

export default function Footer() {
  return (
    <div className='flex w-full gap-2 items-center text-xs'>
      <img src={logo} />
      <div className="flex justify-between bg-black text-white w-full p-3 font-sans rounded">
        <p>Copyright © 2014</p>
        <div className="flex flex-col md:flex-row">
          <p className='border-b border-white pb-1 md:border-none'>Narongsak Thanaen (Art)</p>
          <p className='md:block hidden mx-1'>|</p>
          <a className='hover:text-orange-500' href='mailto:narongsaktanan@gmail.com'>narongsaktanan@gmail.com</a>
        </div>
      </div>
    </div>
  )
}
