import react,{ useState } from 'react'
import './App.css'
import Nav from './mainComponents/nav'
import Main from './mainComponents/main'
import Footer from './footer'


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
    
  const handleMainClick = () => {
    setShowCart(false);
    setShowMen(false);
    setShowWomen(false);
    setShowMain(true);
  };
  const handleMenClick = () => {
    setShowCart(false);
    setShowMen(true);
    setShowWomen(false);
    setShowMain(false);
  };

switch (true){
    case showMain:
        return(
            <div className='container'>
              <Discount />
              <Nav 
                onMainClick={handleMainClick}
                onMenClick={handleMenClick}
              />
              <Main />
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
              />
              <Men />
              <Footer />
            </div>
        );
   
}
}

export default App
