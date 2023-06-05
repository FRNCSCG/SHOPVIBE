import React from 'react'
import { Link } from 'react-router-dom'

export default function Discover() {
  return (
    <div className='md:mx-7 mx-1 mb-2'>
        <div className='flex w-auto my-5 h-16 text-xl font-light  text-slate-600xt bg-slate-200 rounded-md'>
        <h1 className='m-auto'>DISCOVER</h1>
      </div>
      
      {/* <div className=' columns-sm lg:columns-xl xl:columns-xl 2xl:columns-xl md:columns-sm sm:columns-sm'> */}
      <div className='md:columns-2 lg:columns-3'>
        <Link to="/catalog">
          <div className='discover-item relative'>
            <img className='mb-5 mx-auto w-full' src='https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb' alt=''/>
            <div className='teffect absolute bottom-4 left-4 text-2xl text-slate-100'>Summer Specials</div>
          </div>
        </Link>
        <Link to="/catalog">
          <div className='discover-item relative'>
            <img className='mb-5 mx-auto w-full' src='https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb' alt=''/>
            <div className='teffect2 absolute bottom-4 right-4 text-2xl text-slate-700'>Shoes</div>
          </div>
        </Link>
        <Link to="/catalog">
          <div className='discover-item relative'>
            <img className='mb-5 mx-auto w-full' src='https://c.wallhere.com/images/6c/1f/781299150d7e66316b1bef68174f-1342261.jpg!d' alt=''/>
            <div className='teffect absolute bottom-4 left-4 text-2xl text-white'>Demim</div>
          </div>
        </Link>
        <Link to="/catalog">
          <div className='discover-item relative'>
            <img className='mb-5 mx-auto w-full' src='https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg' alt=''/>
            <div className='teffect absolute bottom-4 left-4 text-2xl text-white'>Coats</div>
          </div>
        </Link>
        
        <Link to="/catalog">
          <div className='discover-item relative hover:text-slate-100'>
            <img className='mb-5 mx-auto w-full' src='https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb' alt=''/>
            <div className='teffect2 absolute top-4 right-4 text-2xl text-slate-700'>Limited Edition Bags</div>     
          </div>
        </Link>
        <Link to="/catalog">
          <div className='discover-item relative'>
            <img className='mb-5 mx-auto w-full' src='https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb' alt=''/>
            <div className='teffect absolute top-4 right-4 text-2xl text-white'>Jackets</div>     
          </div>
        </Link>
        <Link to="/catalog">
          <div className='discover-item relative'>
            <img className='mb-5 mx-auto w-full' src='https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg?auto=compress&cs=tinysrgb' alt=''/>
            <div className='teffect absolute bottom-4 left-4 text-2xl text-white'>Dresses</div>     
          </div>
        </Link>
        <Link to="/catalog">
          <div className='discover-item relative'>
            <img className='mb-5 mx-auto w-full' src='https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=400' alt=''/>
            <div className='teffect absolute bottom-4 right-4 text-2xl text-white'>Ready to Wear</div>     
          </div>
        </Link>
      </div>
    </div>
  )
}
