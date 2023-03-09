import react,{ useState } from 'react'
import '../mainComponentsCSS/men.css'
import MenData from '../json-files/men.json';
import Product from './product';


function Men(props){
    const MenArray = MenData.map((item)=>{
        return(
          <Product 
             key={item.id} 
             img1={item.img1}
             tag={item.tag}
             name={item.name}
             price={item.price}
          />
        )
      })
    return(
        <div className='men fade-in'>
           <div className='navigation'>
              <button>suits</button>
              <button>jeans</button>
              <button>coats</button>
              <button>waistcoats</button>
              <button>pants</button>
           </div>
           <div className='products'>
             {MenArray}
           </div>
        </div>
    )
}

export default Men;