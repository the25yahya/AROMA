import react,{ useState } from 'react'
import '../mainComponentsCSS/cart.css'


function Products(){
    return(
        <div className='products'>
          <img
            src='https://images.asos-media.com/products/topshop-denim-cropped-shirt-in-authentic-blue/204164550-2?$n_480w$&wid=476&fit=constrain'
          />
          <p className='name'>denim cropped tshirt</p>
          <div>
            <button>-</button>
            <button>1</button>
            <button>+</button>
          </div>
          <p>80$</p>
        </div>
    )
}




function Cart(props){
    return(
        <div className='cart'>
            <p>home/Cart</p>
            <div className='products-summary'>

            </div>
        </div>
    )
};

export default Cart;