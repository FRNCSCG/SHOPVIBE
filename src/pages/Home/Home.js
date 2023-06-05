import React from 'react'
import Carousell from '../../components/Carousell'
import Discover from './Discover'
import New from './New'

export default function Home() {
  return (
    <div className='home flex flex-col flex-grow'>
      <Carousell/>
      <New/>
      <Discover/>

    </div>

    
  )
}
