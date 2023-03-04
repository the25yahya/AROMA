import react,{ useState } from 'react'
import '../mainComponentsCSS/main.css'
import summer from '../collecions/summer.png'
import next from '../imgs/next.png'

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
            </div>
        </main>
    )
};

export default Main;