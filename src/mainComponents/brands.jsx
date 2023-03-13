import Product from './product';
import react,{ useState, useTransition } from 'react';
import '../mainComponentsCSS/men.css'
import AllData from '../json-files/brands/all.json';
import NikeData from '../json-files/brands/nike.json';
import AddidasData from '../json-files/brands/addidas.json';
import BalenciagaData from '../json-files/brands/balenciaga.json';
import GucciData from '../json-files/brands/gucci.json';
import LevisData from '../json-files/brands/levis.json';




/////////////////////////////////////////////////////////////////////////////////////
function Brands(props){
  const NikeArray = NikeData.map((item)=>{
    return(
      <Product 
      addToCart={props.addToCart} 
      key={item.id} 
      img1={item.img1}
      tag={item.tag}
      name={item.name}
      price={item.price}
      img2={item.img2}
      img3={item.img3}
      img4={item.img4}
   />
      )
    })   
    const AllArray = AllData.map((item)=>{
      return(
        <Product 
        addToCart={props.addToCart} 
        key={item.id} 
        img1={item.img1}
        tag={item.tag}
        name={item.name}
        price={item.price}
        img2={item.img2}
        img3={item.img3}
        img4={item.img4}
     />
        )
      })
  
      const AddidasArray = AddidasData.map((item)=>{
        return(
            <Product 
            addToCart={props.addToCart} 
               key={item.id} 
               img1={item.img1}
               img2={item.img2}
               tag={item.tag}
               name={item.name}
               price={item.price}
            />
          )
        })
  
        const GucciArray = GucciData.map((item)=>{
          return(
              <Product 
              addToCart={props.addToCart} 
                 key={item.id} 
                 img1={item.img1}
                 img2={item.img2}
                 tag={item.tag}
                 name={item.name}
                 price={item.price}
              />
            )
          })
  
          const LevisArray = LevisData.map((item)=>{
            return(
                <Product 
                addToCart={props.addToCart} 
                   key={item.id} 
                   img1={item.img1}
                   img2={item.img2}
                   tag={item.tag}
                   name={item.name}
                   price={item.price}
                />
              )
            }) 
  
            const BalenciagaArray = BalenciagaData.map((item)=>{
              return(
                  <Product
                   addToCart={props.addToCart} 
                     key={item.id} 
                     img1={item.img1}
                     img2={item.img2}
                     tag={item.tag}
                     name={item.name}
                     price={item.price}
                  />
                )
              })
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
      setShowAll(false);
        setShowGucci(true);
        setShowBalenciaga(false);
        setShowNike(false);
        setShowAddidas(false);
        setShowLevis(false);
      };    
    const handleBalenciagaClick = () => {
      setShowAll(false);
        setShowGucci(false);
        setShowBalenciaga(true);
        setShowNike(false);
        setShowAddidas(false);
        setShowLevis(false);
      };
    const handleNikeClick = () => {
        setShowAll(false);
        setShowGucci(false);
        setShowBalenciaga(false);
        setShowNike(true);
        setShowAddidas(false);
        setShowLevis(false);
      };
    const handleAddidasClick = () => {
       setShowAll(false);
        setShowGucci(false);
        setShowBalenciaga(false);
        setShowNike(false);
        setShowAddidas(true);
        setShowLevis(false);
      }; 
    const handleLevisClick = () => {
       setShowAll(false);
        setShowGucci(false);
        setShowBalenciaga(false);
        setShowNike(false);
        setShowAddidas(false);
        setShowLevis(true);
    }

    
            switch(true){
                case showAll:
                  console.log('all');
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
                  console.log('nike');
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
                    
                    
                    case showAddidas:
                      console.log('addidas');
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
                             {AddidasArray}
                           </div> 
                        </div>
                      );

                      case showBalenciaga:
                        console.log('balenciaga');
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
                             {BalenciagaArray}
                           </div>
                          </div>
                        );
                        case showGucci:
                          console.log('gucci');
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
                            {GucciArray}
                           </div>
                            </div>
                          );
                          case showLevis:
                            console.log('levis');
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
                             {LevisArray}
                           </div>  
                              </div>
                            )
            }
}

export default Brands;