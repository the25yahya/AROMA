import react,{ useState } from 'react';
import '../mainComponentsCSS/men.css';
import Product from './product';
import CasualData from '../json-files/casual.json';


function Casual(props){
    const CasualArray = CasualData.map((item)=>{
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
              <button>Dresses</button>
              <button>Tops</button>
              <button>Petite</button>
              <button>SWIMWEAR</button>
           </div>
           <div className='products'>
             {CasualArray}
           </div>
        </div>
    )
}

export default Casual;