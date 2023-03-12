import react,{ useState } from 'react'
import cart from '../imgs/cart.png'








function Product(props){
  const [fade, setfade] = useState(false);
  const [imgSrc, setImgSrc] = useState(props.img1);
  const [showButton, setShowButton] = useState(false);
  const handleMouseEnter = () => {
    setImgSrc(props.img2);
    setfade(true);
  }
  const handleMouseLeave = () => {
    setImgSrc(props.img1);
    setfade(false);
  }
  const handleClick = () => {
    const item = {
      name: props.name,
      price: props.price,
      tag: props.tag,
      img1: props.img1,
      img2: props.img2,
    };
    // Pass the productData to a callback function that handles adding the item to the cart
    //props.onAddToCart(item);
    props.addToCart(item);
  };
    return(
        <div className='product'>
          <img
            className={fade ? 'fade-in' : ''}
            src={imgSrc}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <h2 id='name'>{props.name}</h2>
          <div>
          <p id='price'>{props.price}</p>
          <img
            onClick={handleClick}
            id='cart'
            src={cart}
          />
          </div>
          <p id='tag'>{props.tag}</p>
        </div>
    )
}

export default Product;
