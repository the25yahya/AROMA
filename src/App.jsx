import react,{ useState } from 'react'
import './App.css'
import Nav from './mainComponents/nav'
import Main from './mainComponents/main'
import Footer from './footer'
import Men from './mainComponents/men'
import Women from './mainComponents/women'

function Discount(){
    return(
        <div className='discount'>
            <p>sign up and <span className='off'>GET 20% OFF</span> for your first order. <span className='sign'>sign up now</span></p>
        </div>
    )
}

function App() {
    const [showMain, setShowMain] = useState(true);
    const [showMen, setShowMen] = useState(false);
    const [showWomen, setShowWomen] = useState(false);
    
  const handleMainClick = () => {
    setShowMen(false);
    setShowMain(true);
    setShowWomen(false);
  };
  const handleMenClick = () => {
    setShowMen(true);
    setShowMain(false);
    setShowWomen(false);
  };
  const handleWomenClick= () =>{
    setShowMen(false);
    setShowMain(false);
    setShowWomen(true)
  }

switch (true){
    case showMain:
        return(
            <div className='container'>
              <Discount />
              <Nav 
                onMainClick={handleMainClick}
                onMenClick={handleMenClick}
                onWomenClick={handleWomenClick}
              />
              <Main 
                onMainClick={handleMainClick}
                onMenClick={handleMenClick}
                onWomenClick={handleWomenClick}
              />
              <Footer />
            </div>
        );
    case showMen: 
        return(
            <div className='container'>
              <Discount />
              <Nav 
                onMainClick={handleMainClick}
                onMenClick={handleMenClick}
                onWomenClick={handleWomenClick}
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
            onMainClick={handleMainClick}
            onMenClick={handleMenClick}
            onWomenClick={handleWomenClick}
            />
            <Women />
            <Footer />
        </div>
        );  
   
}
}

export default App
