import react,{ useState } from 'react'
import '../mainComponentsCSS/men.css'
import WomenenData from '../json-files/women.json';
import Product from './product';


function Women(props){
    const WomenArray = WomenenData.map((item)=>{
        return(
          <Product 
             key={item.id} 
             img1={item.img1}
             tag={item.tag}
             name={item.name}
             price={item.price}
             img2={item.img2}
             img3={item.img3}
             img4={item.img4}
          />
        )
      })
    return(
        <div className='men fade-in'>
           <div className='navigation'>
              <button>Dresses</button>
              <button>Tops</button>
              <button>jeans</button>
              <button>Petite</button>
              <button>SWIMWEAR</button>
           </div>
           <div className='products'>
             {WomenArray}
           </div>
        </div>
    )
}

export default Women;