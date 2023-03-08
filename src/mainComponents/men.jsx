import react,{ useState } from 'react'
import '../mainComponentsCSS/men.css'

function Product(props){
    return(
        <div className='product'>
          <img
            src={props.img}
          />
          <h2>{props.description}</h2>
          <p>{props.price}</p>
          <p>{props.tag}</p>
        </div>
    )
}

function Men(props){
    return(
        <div className='navigation'>
            <button>suits</button>
            <button>jeans</button>
            <button>sneakers</button>
            <button>gym-wear</button>
            <button>pants</button>
        </div>
    )
}

export default Men;