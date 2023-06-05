import React from 'react'

export default function About() {
  return (
    <div>
      <div className='flex m-auto w-11/12 my-5 h-16 text-xl font-light text-slate-600xt bg-slate-200 rounded-md'>
        <h1 className='m-auto'>ABOUT</h1>
      </div>
      <svg className='buy-logo m-auto h-[70px] w-[70px] opacity-40' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <div className='flex flex-col w-72 my-auto mx-auto' >
          <p className='my-4 mx-auto w-max'>Developed by Francisco Garcia.</p>
          <a className='heffect mx-auto mb-4 w-max' href="mailto: franggdev@gmail.com">franggdev@gmail.com</a>
          <a className='heffect mx-auto w-max' href="https://www.linkedin.com/in/frangarcia-dev/">LinkedIn</a>
      </div>

    </div>
  )
}
