import React, { useRef } from 'react'
import articles from '../../articles.json'
import { Link } from 'react-router-dom'

export default function New() {
  const fitem = useRef(null)
  const litem = useRef(null)
  const goToFirst = () => fitem.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  const goToLast = () => litem.current.scrollIntoView({ behavior: 'smooth', block: 'nearest'})
 


  return (
    <div className='md:mx-7 mx-1'>
      <div className='flex w-auto my-5 h-16 text-xl font-light text-slate-600xt bg-slate-200 rounded-md'>
        <h1 className='m-auto'><b>NEW</b> THIS SEASON</h1>
      </div>
      <div className='relative flex'>

        {/* <div className='scroll-left flex w-10 h-auto absolute left-1 top-1/2 z-10 cursor-pointer'
          onClick={goToFirst}
        >
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg></span>
        </div>
        
        <div className='scroll-right flex w-10 h-auto absolute right-1 top-1/2 z-10 cursor-pointer'
          onClick={goToLast}
        >
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></span>        
        </div> */}
        
        <div id="img1" className="image-list flex flex-row w-full gap-2">
          {articles.map(article=> 
          article.new &&
            <Link to={`/article/${article.id}/${article.name}`}>
              <div className=' h-full w-72 flex flex-col hover:text-gray-600 transition' key={article.id}>
                <img className='flex h-[90%] shrink-0 object-cover ' src={article.pic1} alt=''/>
                <div className='article-title'>
                  <p className='flex '>{article.name}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
        
      </div>
    </div>
  )
}
