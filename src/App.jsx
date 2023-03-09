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

function Discount(){
    return(
        <div className='discount'>
            <p>sign up and <span className='off'>GET 20% OFF</span> for your first order. <span className='sign'>sign up now</span></p>
        </div>
    )
}

function App() {
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
    };
  const handleMainClick = () => {
    setShowMen(false);
    setShowMain(true);
    setShowWomen(false);
    setshowNewArrival(false);
    setShowCasual(false);
    setShowBrands(false);
  };
  const handleMenClick = () => {
    setShowMen(true);
    setShowMain(false);
    setShowWomen(false);
    setshowNewArrival(false);
    setShowCasual(false);
    setShowBrands(false);
  };
  const handleWomenClick= () =>{
    setShowMen(false);
    setShowMain(false);
    setShowWomen(true);
    setshowNewArrival(false);
    setShowCasual(false);
    setShowBrands(false);
  }
  const handleNewArrivalClick = ()=>{
    setShowMen(false);
    setShowMain(false);
    setShowWomen(false);
    setshowNewArrival(true);
    setShowCasual(false);
    setShowBrands(false);
  }
  const handleCasualClick = () =>{
    setShowMen(false);
    setShowMain(false);
    setShowWomen(false);
    setshowNewArrival(false);
    setShowCasual(true);
    setShowBrands(false);
  }
switch (true){
    case showMain:
        return(
            <div className='container'>
              <Discount />
              <Nav 
                onBrandsClick={handleBrandsClick}
                onMainClick={handleMainClick}
                onMenClick={handleMenClick}
                onWomenClick={handleWomenClick}
                onNewArrivalClick={handleNewArrivalClick}
                onCasualClick={handleCasualClick}
              />
              <Main 
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
          <div>
            <Discount />
            <Nav 
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
          <div>
            <Discount />
            <Nav 
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
        <div>
        <Discount />
        <Nav 
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
   
}
}

export default App
