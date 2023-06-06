import { Carousel } from 'flowbite-react'
import React from 'react'





export default function Carousell() {
  return (
    <div className="carousel">
        <Carousel className='' indicators={true} slide={false} >
            <img className='h-full object-cover'
              src="https://la.louisvuitton.com/images/is/image/MX_Monogram_Empreinte_M82154_DI3.jpg?wid=2048"
              alt="..."
            />
          <img className='h-full object-cover'
            src="https://la.louisvuitton.com/content/dam/lv/online/high-end/unisex/collection/lady-b/U_LP_Lady_B_Drop_2_v1.html/jcr:content/assets/campaign-zhou-bag.jpg?imwidth=2048"
            alt="..."
          />
          <img className='h-full object-cover'
            src="https://wallpaperboat.com/wp-content/uploads/2019/12/dior-03.jpg"
            alt="..."
          />
          <img className='h-full object-cover'
            src="https://cdn.wallpapersafari.com/86/7/jB3HgD.jpg"
            alt="..."
          />
          <img className='h-full object-cover'
            src="https://images.pexels.com/photos/842963/pexels-photo-842963.jpeg?auto=compress&cs=tinysrgb"
            alt="..."
          />
        </Carousel>
    </div>
  )
}
