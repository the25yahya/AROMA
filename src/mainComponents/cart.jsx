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

function Summary(){
  return(
    <div className='summary'>
      <h1>Summary</h1>
      <div className='order total'>
       <p>Order total</p>
       <p>300$</p>
      </div>
      <div className='Shipping'>
       <p>Shipping</p>
       <p>50$</p>
      </div>
      <div className='subtotal'>
       <p>Subtotal</p>
       <p>1000$</p>
      </div>
      <button>CHECKOUT</button>
    </div>
  )
}
function Warning(){
  return(
    <h1>
      your cart is currently empty
    </h1>
  )
}



function Cart(props){
if(props.items.length>0){
  return(
      <div className='cart'>
          <p>home/Cart</p>
          <div className='products-summary'>

          </div>
      </div>
  )
}else return(
  <div>
    <div className='cart'>
          <p>home/Cart</p>
          <Warning/>
      </div>
  </div>
)
};

export default Cart;