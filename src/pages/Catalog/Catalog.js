import React from 'react'
import articles from '../../articles.json'
import { Link } from 'react-router-dom'

export default function Catalog() {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex m-auto w-11/12 my-5 h-16 text-xl font-light  text-slate-600xt bg-slate-200 rounded-md'>
        <h1 className='m-auto'>CATALOG</h1>
      </div>
      <div className='m-auto w-11/12 h-auto grid grid-flow-row grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-3'>
        {articles.map(article=> 
          <Link to={`/article/${article.id}/${article.name}`}>
            <div className='article-card flex flex-col hover:text-gray-600 transition' key={article.id}>
              <img src={article.pic1} alt=''/>
              <div className='article-title'>
                <p className='flex '>{article.name}</p>
              </div>
            </div>
          </Link>
        )}
      </div>
    
    
    </div>
  )
}
