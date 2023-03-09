import Product from './product';
import react,{ useState, useTransition } from 'react';
import '../mainComponentsCSS/men.css'
import AllData from '../json-files/brands/all.json';
import NikeData from '../json-files/brands/nike.json';





function Brands(props){
    const [showAll, setShowAll] = useState(true);
    const [showGucci, setShowGucci] = useState(false);
    const [showBalenciaga, setShowBalenciaga] = useState(false);
    const [showNike, setShowNike] = useState(false);
    const [showAddidas, setShowAddidas] = useState(false);
    const [showLevis, setShowLevis] = useState(false);

    ////////////////////////////////////////////////////
    const handleAllClick = () => {
        setShowAll(true);
        setShowGucci(false);
        setShowBalenciaga(false);
        setShowNike(false);
        setShowAddidas(false);
        setShowLevis(false);
      }; 
    const handleGucciClick = () => {
        setGucci(true);
        setShowBalenciaga(false);
        setShowNike(false);
        setShowAddidas(false);
        setShowLevis(false);
      };    
    const handleBalenciagaClick = () => {
        setGucci(false);
        setShowBalenciaga(true);
        setShowNike(false);
        setShowAddidas(false);
        setShowLevis(false);
      };
    const handleNikeClick = () => {
        setGucci(false);
        setShowBalenciaga(false);
        setShowNike(true);
        setShowAddidas(false);
        setShowLevis(false);
      };
    const handleAddidasClick = () => {
        setGucci(false);
        setShowBalenciaga(false);
        setShowNike(false);
        setShowAddidas(true);
        setShowLevis(false);
      }; 
    const handleLevisClick = () => {
        setGucci(false);
        setShowBalenciaga(false);
        setShowNike(false);
        setShowAddidas(false);
        setShowLevis(true);
    }

    const AllArray = AllData.map((item)=>{
        return(
            <Product 
               key={item.id} 
               img1={item.img1}
               tag={item.tag}
               name={item.name}
               price={item.price}
            />
          )
        })
    const NikeArray = NikeData.map((item)=>{
            return(
                <Product 
                   key={item.id} 
                   img1={item.img1}
                   tag={item.tag}
                   name={item.name}
                   price={item.price}
                />
              )
            })   
            switch(true){
                case showAll:
      return(
          <div className='men fade-in'>
             <div className='navigation'>
                <button onClick={handleAllClick}>All</button>
                <button onClick={handleGucciClick}>gucci</button>
                <button onClick={handleNikeClick}>Nike</button>
                <button onClick={handleBalenciagaClick}>Balenciaga</button>
                <button onClick={handleAddidasClick}>addidas</button>
                <button onClick={handleLevisClick}>Levi's</button>
             </div>
             <div className='products'>
               {AllArray}
             </div>
          </div>
      );
                 case showNike:
                    return(
                        <div className='men fade-in'>
                           <div className='navigation'>
                              <button onClick={handleAllClick}>All</button>
                              <button onClick={handleGucciClick}>gucci</button>
                              <button onClick={handleNikeClick}>Nike</button>
                              <button onClick={handleBalenciagaClick}>Balenciaga</button>
                              <button onClick={handleAddidasClick}>addidas</button>
                              <button onClick={handleLevisClick}>Levi's</button>
                           </div>
                           <div className='products'>
                             {NikeArray}
                           </div>
                        </div>
                    );     
            }
}

export default Brands;