import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Shopvibe logo.png'


export default function Navbar() {

  const [open, setOpen] = useState(false);

  


  const handleMenuClick = () => {
    setOpen(!open)
  }

  const handleOut = () => {
    open && setOpen(false)
  }

  return (
    <div>
      <nav className="navbar" >

        <div className="hidden my-auto ml-5 w-60 md:flex ">
          <ul className="flex flex-row my-auto gap-5 text-lg">
            <li className='flex heffect'>
              <Link to={"/"}>
                Home
              </Link>
            </li>
            <li className='flex heffect'>
              <Link to={"catalog"}>
                Catalog
              </Link>
            </li>
            <li className='flex heffect'>
              <Link to={"about"}>
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className='logo ml-5 h-[60px] overflow-hidden my-auto md:mx-auto md:w-full'>
          {/* <h1 className='text-3xl cursor-pointer mx-auto w-max '>Shopvibe</Link></h1> */}
          <Link to={"/"}><img className='flex m-auto h-[65px] object-cover ' src={logo} alt=''/></Link>
        </div>

        <div className='hidden my-auto ml-auto md:flex'>
          <div className='flex my-auto w-60 '>
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3  cursor-pointer">
                <button>
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              <input  id="search" class="block w-48 p-4 text-sm text-gray-900 border-b border-gray-300 bg-zinc-50 " placeholder="Search" required/>
            </div>
          </div>
        </div>

        <div className='md:hidden my-auto mr-3 ml-auto transition duration-300 ease-in-out hover:bg-slate-200 rounded-md cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" className="flex m-auto w-10 h-10 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>

        <div onClick={handleMenuClick} className='md:hidden my-auto mr-5 transition duration-300 ease-in-out hover:bg-slate-200 rounded-md cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" className="flex m-auto w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path className={`${open ? "fade" : "appear"}`} 
            strokeLinecap="round" strokeLinejoin="round"  d="M4 6h16M4 12h16M4 18h16" />
            <path className={`${!open ? " fade" : "appear"}`}
            strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <div onMouseLeave={handleOut} className={`absolute md:hidden h-screen w-2/3 transition-all z-10 ${open ? "left-1/3" : "left-full"} bg-slate-100`} style={{top:"60px"}}>
          <ul  className="flex flex-col mt-12 ml-12 mr-6 gap-5 text-lg">
            <li onClick={handleMenuClick} className='flex heffect'>
              <Link to={"/"}>
                HOME
              </Link>
            </li>
            <li onClick={handleMenuClick} className='flex heffect'>
              <Link to={"catalog"}>
                CATALOG
              </Link>
            </li>
            <li onClick={handleMenuClick} className='flex heffect'>
              <Link to={"about"}>
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={handleMenuClick} className={`absolute md:hidden h-screen w-screen transition-all ${open ? "visible opacity-70" : "invisible opacity-0"} bg-slate-300`} style={{top:"60px"}}>
        </div>

      </nav>
      <div className='w-full' style={{height:'60px'}}> 
      </div>

    </div>
  )

}
