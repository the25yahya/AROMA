import react,{ useState } from 'react'
import '../mainComponentsCSS/main.css'
import summer from '../collecions/summer.png'
import next from '../imgs/next.png'
import Nike from '../imgs/nike-logo.png'
import adidas from '../imgs/adidas-logo.png'
import levis from '../imgs/levis.png'
import gucci from '../imgs/gucci.png'
import balenciaga from '../imgs/balenciaga.png'
import channel from '../imgs/channel.png'
import money from '../imgs/save-money.png'
import happy from '../imgs/happy.png'
import delivery from '../imgs/delivery.png'
import arrival from '../imgs/cart.png'


function Currated(props){
  const handleClick = () => {
    props.onClick();
  }
  return(
    <div className={props.className}>
      <img src={props.img} />
      <button onClick={handleClick} >{props.description} <span>&#8594;</span></button>
    </div>
  )
}
function Limited(props){
  return(
    <div className='limited-offer'>
     <img src={props.img} />
     <div className='offer'>
      <h1>LIMITED OFFER</h1>
      <p>{props.offer}</p>
      <button>Grab it now <span>&#8594;</span></button>
     </div>
    </div>
  )
}

function Main(props){
  const handleMenClickAndScrollTop = () => {
    props.onMenClick(); 
    window.scrollTo(0, 0);
  };
  const handleCasualAndScrollTop = () =>{
    props.onCasualClick(); 
    window.scrollTo(0, 0);
  }
  const handleWomenAndScrollTop = () =>{
    props.onWomenClick();
    window.scrollTo(0, 0);
  }
  const handleNewArrivalAndScrollTop = () =>{
    props.onNewArrivalClick();
    window.scrollTo(0, 0);
  }
    return(
        <main className='fade-in'>
            <div className='collections'>
              <img
                src={summer}
              />
              <p className='intro'>level up your style with our    <span>summer collection</span></p>
              <button onClick={handleNewArrivalAndScrollTop}>shop now <img id='next' src={next} /></button>
              <div className='left-right'>
                <button></button>
                <button></button>
              </div>
            </div>
            <div className='brands'>
             <h1>brands</h1>
             <div className='brands-holder'> 
              <img src={Nike} />
              <img id='adidas' src={adidas} />
              <img src={levis} />
              <img src={gucci} />
              <img id='balenciaga' src={balenciaga} />
              <img src={channel} />
             </div>
            </div>
            <div className='customer-exp'>
              <div className='customer-exp-intro'>
                <p className='intro1'>We provide the best <span>customer experience</span></p>
                <div className='intro2'>
                <p>We ensure our customers have the best shoppping eperience</p>
                </div>
              </div>
              <div className='customer-exp-exp'>
                <div className='explanation'>
                  <img className='exp-img' src={money} />
                  <p className='exp-title'>Original Products</p>
                  <p className='exp-exp'>We provide money back guarantee if the product are not original</p>
                </div>
                <div
                id='satisfaction' className='explanation'>
                  <img className='exp-img' src={happy} />
                  <p className='exp-title'>satisfaction Guarantee</p>
                  <p className='exp-exp'>Exchange the product you've purchased if it doesn't fit on you</p>
                </div>
                <div className='explanation'>
                  <img className='exp-img' src={arrival} />
                  <p className='exp-title'>New arrival everyday</p>
                  <p className='exp-exp'>We update our collections almost everyday</p>
                </div>
                <div className='explanation'>
                  <img className='exp-img' src={delivery} />
                  <p className='exp-title'>Fast & Free shipping</p>
                  <p className='exp-exp'>We offer fast and free shipping for our loyal customers</p>
                </div>
              </div>
              <div className='currated-picks'>
                  <h1>Currated picks</h1>
               <div className='currated-holder'>
                 <Currated 
                  className='new Arrival'
                  img='https://img.freepik.com/premium-photo/woman-brown-beige-suit-corset-sunglasses-jacket-pants-white-background-bob-haircut_481253-1824.jpg?w=2000'
                  description='new Arrival'
                  onClick={() => handleNewArrivalAndScrollTop()}
                 />
                 <Currated 
                  className='shop-men'
                  img='https://img.freepik.com/premium-photo/bearded-man-fashion-hairstyle-coat-studio-modern-style_163305-117480.jpg?w=2000'
                  description='Shop Men'
                  onClick={() => handleMenClickAndScrollTop()}
                 />
                 <Currated 
                  className='shop-women'
                  img='https://img.freepik.com/premium-photo/woman-beige-brown-suit-pants-unbuttoned-seam-jacket-white-background-studio-shot_481253-2083.jpg'
                  description='Shop Women'
                  onClick={()=> handleWomenAndScrollTop() }
                 />
                  <Currated 
                  className='shop-casual'
                  img='https://img.freepik.com/premium-photo/fashionable-man-attractive-woman-gray-background-couple-love-portrait_163305-65154.jpg?w=360'
                  description='Shop Casual'
                  onClick={()=> handleCasualAndScrollTop() }
                 />
               </div>
               <Limited 
                img='https://img.freepik.com/premium-photo/skincare-concept-woman-with-makeup-face-skin-skincare-skincare-skin-treatment-skincare-cosmetics-products-beauty-lies-skin-deep_265223-67593.jpg?w=360'
                offer='35% off only this friday and get special gift'
               />
               <div className='newsletter'>
                 <h1>subscribe to our news letter to get updates <span>on our latest collections</span></h1>
                 <p className='newsletter-offer'>Get 10% off on your first order just by subscribing to our newsletter !</p>
                 <div>
                   <input placeholder='Enter your email' type='email' />
                   <button>Subscribe</button>
                 </div>
                 <p className='newsletter-closure'>You will be able to unsubscribe at any time.Read Our Privacy Policy <span>Here</span></p>
               </div>
              </div>
            </div>
        </main>
    )
};

export default Main;