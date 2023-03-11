import react,{ useState } from 'react'









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
    return(
        <div className='product'>
          <img
            className={fade ? 'fade-in' : ''}
            src={imgSrc}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <h2 id='name'>{props.name}</h2>
          <p id='price'>{props.price}</p>
          <p id='tag'>{props.tag}</p>
        </div>
    )
}

export default Product;
