import React from 'react'
import logo from '../assets/Shopvibe logo.png'


export default function Footer() {
  return (
    <div className='footer flex flex-row w-screen '>
        <div className='flex w-48 ml-4 my-4 flex-shrink-0'>
          <img className='flex ' src={logo} alt=''/>
        </div>
        <div className='flex flex-col max-w-96 my-auto ml-auto mr-8' >
          <p>Developed by Francisco Garcia.</p>
          <p>For testing and educational purposes only.</p>
          
        </div>
    </div>
  )
}
