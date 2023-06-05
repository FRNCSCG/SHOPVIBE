import React, { useRef, useState } from 'react'
import articles from '../../articles.json'
import { useParams } from 'react-router-dom';
export default function Article() {

    const params = useParams();
    let article = articles.filter( obj => obj.id === parseInt(params.articleId))[0];

    const fitem = useRef(null)
    const litem = useRef(null)
    const goToFirst = () => {
        fitem.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        litem.current.style.opacity ="20%"
        fitem.current.style.opacity ="100%"
    }
    const goToLast = () => {
        litem.current.scrollIntoView({ behavior: 'smooth', block: 'nearest'})
        fitem.current.style.opacity ="20%"
        litem.current.style.opacity ="100%"
    }

  return (
    <div className='flex flex-col md:mx-7 mx-2 mt-1 mb-4'>

        <div className='article-view flex lg:flex-row w-full gap-1 flex-col'>
            <div className='flex lg:w-3/4 w-full'>
                
                <div className='flex my-0 mr-0 ml-auto cursor-pointer' onClick={goToFirst}>
                    <svg className='flex w-12 m-auto' data-darkreader-inline-stroke="" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 19.5L8.25 12l7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div className='flex flex-row article-gallery gap-4'>
                    <img ref={fitem} className='article-img flex rounded-md w-full' src={article.pic1} alt='' />
                    <img ref={litem} className='article-img flex rounded-md w-full opacity-50' src={article.pic2} alt='' />
                    
                </div>
                <div className='flex my-0 mr-auto ml-0 cursor-pointer' onClick={goToLast}>
                    <svg className='flex w-12 m-auto' data-darkreader-inline-stroke="" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            
            </div>

            <div className='article-desc lg:w-1/4 w-full h- flex flex-col gap-4'> 
                <div className='details bg-slate-200 w-full rounded-md  '>
                    <h1 className=' text-3xl font-light text-slate-600xt flex my-4 mx-4 border-b-2'>{article.name}</h1>
                    <p className='flex mx-4 my-4'> Color: {article.color} </p>
                    <p className='flex mx-4 w-3/4 text-left'>  {article.description}  </p>
                    <div className='mx-4 my-4'>
                        <h1 className='text-slate-600xt flex mb-1'>AVAILABLE SIZES</h1>
                        <div className='flex flex-row gap-1'>
                            <div className='w-10 h-10 flex bg-slate-100 border border-gray-500'><p className='flex m-auto'>S</p></div>
                            <div className='w-10 h-10 flex bg-slate-100 border border-gray-500'><p className='flex m-auto'>M</p></div>
                            <div className='w-10 h-10 flex bg-slate-100 border border-gray-500'><p className='flex m-auto'>L</p></div>
                            <div className='w-10 h-10 flex bg-slate-100 border border-gray-500'><p className='flex m-auto'>XL</p></div>
                        </div>
                    </div>
                </div>
                <div className='buy bg-slate-100 w-full lg:h-80 rounded-md p-4'>
                    <div className='flex'>
                            BUY
                    </div>
                    <div className='flex text-3xl my-4 mx-auto'>
                        ${article.price}
                    </div>
                    <button className='buy-button w-40 h-14 my-6 bg-gray-700 rounded-lg flex flex-row m-auto'>
                        <svg className='buy-logo m-auto h-8 w-8' aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <div className='m-auto text-xl '>
                            BUY
                        </div>
                    </button>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}
