import react,{ useState } from 'react'
import '../mainComponentsCSS/men.css'
import WomenenData from '../json-files/women.json';

function Product(props){
    return(
        <div className='product'>
          <img
            src={props.img1}
          />
          <h2 id='name'>{props.name}</h2>
          <p id='price'>{props.price}</p>
          <p id='tag'>{props.tag}</p>
        </div>
    )
} 

function Women(props){
    const WomenArray = WomenenData.map((item)=>{
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