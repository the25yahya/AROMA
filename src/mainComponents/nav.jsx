import react,{ useState } from 'react'
import '../mainComponentsCSS/nav.css'
import logo from '../imgs/wolf (3).png'
import letter from '../imgs/letter-o.png'
import user from '../imgs/user.png'
import cart from '../imgs/cart.png'

function Nav(props){
  function reloadApp() {
    window.location.reload();
  }
    return(
        <nav>
            <div
             onClick={reloadApp}
             className='title'>
              <img 
                src={logo}
              />
              <h1>AR<span><img
                id='letter-o'
                src={letter}
              /></span>MA</h1>
            </div>
            <div className='features'>
                <p onClick={props.onMainClick}>Home</p>
                <p>new arrival</p>
                <p onClick={props.onMenClick}>Men</p>
                <p onClick={props.onWomenClick}>women</p>
                <p>Casual</p>
                <p>brands</p>
            </div>
            <div className='user'>
                <input placeholder='search'
                 type="search"/>
                <img src={cart}/>
                <img src={user}/>
            </div>
            <div className='toggle'>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div> 
            </div>
        </nav>
    )
};

export default Nav;