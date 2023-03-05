import react,{ useState } from 'react'
import './mainComponentsCSS/footer.css'
import visa from './imgs/visa.png'
import paypal from './imgs/paypal.png'
import mastercard from './imgs/masercard.png'
function Footer(){
    return(
    <footer> 
        <div className='footer-holder'>
           <div className='aroma'>
              <h1 id='aroma'>AROMA</h1>
              <p id='aromap'>specializes in providing high quality, stylish product for your wardrobe</p>
            </div>
            <div className='shop'> 
              <h1>Shop</h1>
              <p>All collections</p>
              <p>Winter edition</p>
              <p>Summer edition</p>
              <p>Discount</p>
            </div>
            <div className='company'>
              <h1>Company</h1>
              <p>About us</p>
              <p>Contact</p>
              <p>Affiliates</p>
            </div>
            <div className='support'>
              <h1>Support</h1>
              <p>FAQs</p>
              <p>Cookies policy</p>
              <p>Terms of use</p>
            </div>
            <div className='payement'>
             <h1>payement mathodes</h1>
             <div className='imgs'>
               <img src={visa} />
               <img src={mastercard} />
               <img id='paypal' src={paypal} />
             </div>
            </div>
        </div>
        <div className='rights'>
          <p>Copyright AROMA. <span>all rights reserved.</span></p>
        </div>
    </footer>
    )
}
export default Footer;