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




function Main(){
    return(
        <main>
            <div className='collections'>
              <img
                src={summer}
              />
              <p className='intro'>level up your style with our    <span>summer collection</span></p>
              <button>shop now <img id='next' src={next} /></button>
              <div className='dots'>
                <p className='selected'>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
              </div>
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
                <div className='explanation'>
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
            </div>
        </main>
    )
};

export default Main;