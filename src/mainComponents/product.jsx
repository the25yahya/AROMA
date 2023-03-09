import react,{ useState } from 'react'









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

export default Product;
