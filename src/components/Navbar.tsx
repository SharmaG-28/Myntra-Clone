import React from 'react'
import logo from "../images/logo_myntra.png"
import lens from "../images/lens.png"
import account from "../images/account.png"
import out from "../images/logout.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex text-sm font-bold text-gray-700 items-center p-4 shadow-lg'>
        <img src={logo} className=' w-20 h-12 ml-5'/>
        <h1 className='ml-4'>MEN</h1>
        <h1 className='ml-8'>WOMEN</h1>
        <h1 className='ml-8'>KIDS</h1>
        <h1 className='ml-8'>HOME & LIVING</h1>
        <h1 className='ml-8'>BEAUTY</h1>
        <h1 className='ml-12'>STUDIO</h1>
        <div className='border border-gray-100 flex items-center bg-gray-100 w-96 h-10 ml-14 '>
            <img src={lens} className='h-3 w-3 ml-4' />
            <input className="bg-gray-100  text-gray-900 font-normal outline-none text-sm rounded-sm block w-full p-2.5 ml-4" placeholder="Search for products" required/>
        </div>
        <Link to="/login">
          <div className=' ml-6 text-xs'>
            <img src={account} className='w-5 h-5 ml-2' />
            <h1>Login</h1>
          </div>
        </Link>
        <div className=' ml-6 text-xs'>
            <img src={out} className='w-5 h-5 ml-2' />
            <h1>Logout</h1>
        </div>
    </div>
  )
}

export default Navbar