import react,{ useState } from 'react'
import '../mainComponentsCSS/cart.css'

function DelieryInfo(props){
  return(
    <div className='delivery-info'>
    <h1>delivery information</h1>
      <div className='name'>
        <p>name</p>
        <input type="text" placeholder='your name'/>
      </div>
      <div className='mobile-number'>
        <p>mobile number</p>
        <input type="text" placeholder='your number'/>
      </div>
      <div className='email'>
        <p>email</p>
        <input type="email" placeholder='email'/>
      </div>
      <div className='city'>
        <p>city</p>
        <input type="text" placeholder='hometown'/>
      </div>
      <div className='adress'>
        <p>adress</p>
        <input type="text" placeholder='your adress'/>
      </div>
    </div>
  )
}

function Product(props){
    return(
        <div className='item'>
          <img
            src={props.img}
          />
          <p className='name'>{props.name}</p>
          <div>
            <button className='minus'>-</button>
            <button className='quantity'>1</button>
            <button className='plus'>+</button>
          </div>
          <p className='price'>{props.price}</p>
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
    <h1 className='warning'>
      your cart is currently empty
    </h1>
  )
}



function Cart(props){

 let products = props.items.map((product,index)=>{
    return(
      <Product
      key={product.id || index}
      name={product.name}
      img={product.img1}
      price={product.price}
      />
    )
  })

if(props.items.length>0){
  return(
      <div className='cart'>
          <p id='home'>home/<span id='cart'>cart</span></p>
          <div className='products-summary'>
           {products}
          </div>
          <DelieryInfo
          />
          <button id='checkout'>checkout</button>
      </div>
  )
}else return(
    <div className='cart'>
         <p id='home'>home/<span id='cart'>cart</span></p>
          <Warning/>
          <DelieryInfo />
      </div>
)
};

export default Cart;