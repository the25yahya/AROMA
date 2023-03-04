import react,{ useState } from 'react'
import './App.css'
import Nav from './mainComponents/nav'
import Main from './mainComponents/main'


function Discount(){
    return(
        <div className='discount'>
            <p>sign up and <span className='off'>GET 20% OFF</span> for your first order. <span className='sign'>sign up now</span></p>
        </div>
    )
}

function App() {
    return(
        <div className='container'>
          <Discount />
          <Nav />
          <Main />
        </div>
    )
}

export default App
