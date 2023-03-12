import react,{ useState } from 'react';
import '../mainComponentsCSS/men.css';
import Product from './product';
import NewArrivalData from '../json-files/newArrival.json';








function NewArrival(props){
    const NewArrivalArray = NewArrivalData.map((item)=>{
        return(
          <Product 
           addToCart={props.addToCart} 
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
             {NewArrivalArray}
           </div>
        </div>
    )
}

export default NewArrival;