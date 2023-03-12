import react,{ useState } from 'react'
import './App.css'
import Nav from './mainComponents/nav'
import Main from './mainComponents/main'
import Footer from './footer'
import Men from './mainComponents/men'
import Women from './mainComponents/women'
import NewArrival from './mainComponents/newArrival'
import Casual from './mainComponents/casual'
import Brands from './mainComponents/brands'
import Cart from './mainComponents/cart'

function Discount(){
    return(
        <div className='discount'>
            <p>sign up and <span className='off'>GET 20% OFF</span> for your first order. <span className='sign'>sign up now</span></p>
        </div>
    )
}

function App() {
    const [showCart, setShowCart] = useState(false);
    const [showBrands, setShowBrands] = useState(false);
    const [showCasual, setShowCasual] = useState(false);
    const [showMain, setShowMain] = useState(true);
    const [showMen, setShowMen] = useState(false);
    const [showWomen, setShowWomen] = useState(false);
    const [showNewArrival, setshowNewArrival] = useState(false)
    


  const handleBrandsClick = () => {
      setShowBrands(true);
      setShowMen(false);
      setShowMain(false);
      setShowWomen(false);
      setshowNewArrival(false);
      setShowCasual(false);
      setShowCart(false);
    };
  const handleCartClick = () => {
      setShowCart(true);
      setShowBrands(false);
      setShowMen(false);
      setShowMain(false);
      setShowWomen(false);
      setshowNewArrival(false);
      setShowCasual(false);
    }; 
  const handleMainClick = () => {
    setShowMen(false);
    setShowMain(true);
    setShowWomen(false);
    setshowNewArrival(false);
    setShowCasual(false);
    setShowBrands(false);
    setShowCart(false);
  };
  const handleMenClick = () => {
    setShowMen(true);
    setShowMain(false);
    setShowWomen(false);
    setshowNewArrival(false);
    setShowCasual(false);
    setShowBrands(false);
    setShowCart(false);
  };
  const handleWomenClick= () =>{
    setShowMen(false);
    setShowMain(false);
    setShowWomen(true);
    setshowNewArrival(false);
    setShowCasual(false);
    setShowBrands(false);
    setShowCart(false);
  }
  const handleNewArrivalClick = ()=>{
    setShowMen(false);
    setShowMain(false);
    setShowWomen(false);
    setshowNewArrival(true);
    setShowCasual(false);
    setShowBrands(false);
    setShowCart(false);
  }
  const handleCasualClick = () =>{
    setShowMen(false);
    setShowMain(false);
    setShowWomen(false);
    setshowNewArrival(false);
    setShowCasual(true);
    setShowBrands(false);
    setShowCart(false);
  }
switch (true){
    case showMain:
        return(
            <div className='container'>
              <Discount />
              <Nav 
                onCartClick={handleCartClick}
                onBrandsClick={handleBrandsClick}
                onMainClick={handleMainClick}
                onMenClick={handleMenClick}
                onWomenClick={handleWomenClick}
                onNewArrivalClick={handleNewArrivalClick}
                onCasualClick={handleCasualClick}
              />
              <Main 
                onCartClick={handleCartClick}
                onMainClick={handleMainClick}
                onMenClick={handleMenClick}
                onWomenClick={handleWomenClick}
                onNewArrivalClick={handleNewArrivalClick}
                onCasualClick={handleCasualClick}
              />
              <Footer />
            </div>
        );
    case showMen: 
        return(
            <div className='container'>
              <Discount />
              <Nav 
                onCartClick={handleCartClick}
                onBrandsClick={handleBrandsClick}
                onMainClick={handleMainClick}
                onMenClick={handleMenClick}
                onWomenClick={handleWomenClick}
                onNewArrivalClick={handleNewArrivalClick}
                onCasualClick={handleCasualClick}
              />
              <Men />
              <Footer />
            </div>
        );
    case showWomen:
        return(
          <div className='container'>
            <Discount />
            <Nav 
             onCartClick={handleCartClick}
            onBrandsClick={handleBrandsClick}
            onMainClick={handleMainClick}
            onMenClick={handleMenClick}
            onWomenClick={handleWomenClick}
            onNewArrivalClick={handleNewArrivalClick}
            onCasualClick={handleCasualClick}
            />
            <Women />
            <Footer />
        </div>
        ); 
    case showNewArrival:
        return(
          <div className='container'>
            <Discount />
            <Nav 
            onCartClick={handleCartClick}   
            onBrandsClick={handleBrandsClick}
            onMainClick={handleMainClick}
            onMenClick={handleMenClick}
            onWomenClick={handleWomenClick}
            onNewArrivalClick={handleNewArrivalClick}
            onCasualClick={handleCasualClick}
            />
            <NewArrival />
            <Footer />
          </div>
        );
    case showCasual:
        return(
          <div className='container'>
            <Discount />
            <Nav 
            onCartClick={handleCartClick}
            onBrandsClick={handleBrandsClick}
            onMainClick={handleMainClick}
            onMenClick={handleMenClick}
            onWomenClick={handleWomenClick}
            onNewArrivalClick={handleNewArrivalClick}
            onCasualClick={handleCasualClick}
            />
            <Casual />
            <Footer />
          </div>
        );
    case showBrands:  
       return(
        <div className='container'>
        <Discount />
        <Nav 
        onCartClick={handleCartClick}
        onBrandsClick={handleBrandsClick}
        onMainClick={handleMainClick}
        onMenClick={handleMenClick}
        onWomenClick={handleWomenClick}
        onNewArrivalClick={handleNewArrivalClick}
        onCasualClick={handleCasualClick}
        />
        <Brands />
        <Footer />
      </div>
       ); 
        case showCart:
          return(
            <div className='container'>
              <Discount />
              <Nav 
              onCartClick={handleCartClick}
              onBrandsClick={handleBrandsClick}
              onMainClick={handleMainClick}
              onMenClick={handleMenClick}
              onWomenClick={handleWomenClick}
              onNewArrivalClick={handleNewArrivalClick}
              onCasualClick={handleCasualClick}
               />
              <Cart />
              <Footer />
            </div>
          )       
   
}
}

export default App
