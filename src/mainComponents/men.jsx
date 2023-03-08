import react,{ useState } from 'react'
import '../mainComponentsCSS/men.css'
import MenData from '../json-files/men.json';

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
        <div className='men'>
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