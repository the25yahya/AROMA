import react,{ useState } from 'react'
import '../mainComponentsCSS/nav.css'
import logo from '../imgs/wolf (3).png'
import letter from '../imgs/letter-o.png'
import user from '../imgs/user.png'
import cart from '../imgs/cart.png'

function Nav(){
    return(
        <nav>
            <div className='title'>
              <img 
                src={logo}
              />
              <h1>AR<span><img
                id='letter-o'
                src={letter}
              /></span>MA</h1>
            </div>
            <div className='features'>
                <p>new arrival</p>
                <p>Men</p>
                <p>women</p>
                <p>Casual</p>
                <p>brands</p>
            </div>
            <div className='user'>
                <input placeholder='search'
                 type="search"/>
                <img src={cart}/>
                <img src={user}/>
            </div>
        </nav>
    )
};

export default Nav;