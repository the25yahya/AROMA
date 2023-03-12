import react,{ useState } from 'react'
import '../mainComponentsCSS/nav.css'
import logo from '../imgs/wolf (3).png'
import letter from '../imgs/letter-o.png'
import user from '../imgs/user.png'
import cart from '../imgs/cart.png'






function DropDown(props){
  function ScrollUp(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
}
function handleMainAndScroll(){
  ScrollUp();
  props.onMainClick();
  props.toggleDropDown();
  props.toggleX();
}
function handleNewArrivalAndScroll(){
  ScrollUp();
  props.onNewArrivalClick();
  props.toggleDropDown();
  props.toggleX();
}
function handleMenAndScroll(){
  ScrollUp();
  props.onMenClick();
  props.toggleDropDown();
  props.toggleX();
}
function handleWomenAndScroll(){
  ScrollUp();
  props.onWomenClick();
  props.toggleDropDown();
  props.toggleX();
}
function handleCasualAndScroll(){
  ScrollUp();
  props.onCasualClick();
  props.toggleDropDown();
  props.toggleX();
}
function handleBrandsAndScroll(){
  ScrollUp();
  props.onBrandsClick();
  props.toggleDropDown();
  props.toggleX();
}
  const dropdownClassname = `dropdown ${props.isOpen ? 'open' : 'show'}`;
  return(
    <div className={dropdownClassname}>
                <h1>menu</h1>
                <p onClick={handleMainAndScroll}>Home</p>
                <p onClick={handleNewArrivalAndScroll}>new arrival</p>
                <p onClick={handleMenAndScroll}>Men</p>
                <p onClick={handleWomenAndScroll}>women</p>
                <p onClick={handleCasualAndScroll}>Casual</p>
                <p onClick={handleBrandsAndScroll}>brands</p>
    </div>
  )
}


function Nav(props){
  const [isDropDownOpen, setIsDropDownOpen] = useState(true);
  const toggleDropDown = () => {
    setIsDropDownOpen(prevState => !prevState);
  };
  function reloadApp() {
    window.location.reload();
  }
  function toggleX() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => {
      bar.classList.toggle('x');
    });
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
                <p onClick={props.onNewArrivalClick}>new arrival</p>
                <p 
                onClick={props.onMenClick}>Men</p>
                <p onClick={props.onWomenClick}>women</p>
                <p onClick={props.onCasualClick}>Casual</p>
                <p onClick={props.onBrandsClick}>brands</p>
            </div>
            <div className='user'>
                <input placeholder='search'
                 type="search"/>
                <img
                onClick={props.onCartClick}
                 src={cart}/>
                <img src={user}/>
            </div>
            <div onClick={() => {toggleDropDown(); toggleX();}} className='toggle'>
                <div className='bar'></div>
                <div className='bar'></div>
               <div className='bar'></div> 
            </div>
            <DropDown 
        onBrandsClick={props.onBrandsClick}    
        onCasualClick={props.onCasualClick}    
        onNewArrivalClick={props.onNewArrivalClick}    
        toggleDropDown ={toggleDropDown}
        toggleX={toggleX}
        onMenClick={props.onMenClick}
        onWomenClick={props.onWomenClick}
        onMainClick={props.onMainClick}
        isOpen={isDropDownOpen}/>
        </nav>
    )
};

export default Nav;