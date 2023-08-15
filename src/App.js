
import { createContext } from 'react';
import Data from './component/Store';
import './App.css';
// import Routescompo from './component/router'
// import Store from './component/Store';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Bollywood from './component/bollywood';
import Home from './component/home';
import Technology from './component/technology';
import Fitness from './component/fitness';
import Food from './component/food';
import Linkcompo from './component/linkcompo';
import Innerpage from './component/innerpage';
import Hollywood from './component/Hollywood';
export const  ContextApi = createContext();

function App() {
  return (
   
    <>
    <div className="head">
    <div className="text"> <span className="rotate">The</span>Siren</div>
        {/* <div className="nav_div"></div> */}
     <ContextApi.Provider value={Data}>
     <BrowserRouter>
            <Linkcompo/>
            <Routes>
            
            <Route path="/" element={<Home/>} />
            <Route path="/bollywood" element={<Bollywood/>}/>
            <Route path="/technology" element={<Technology/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/hollywood" element={<Hollywood/>}/>
            <Route path="/food" element={<Food/>}/>
            <Route path='*' element={< Innerpage/>} />
           </Routes>
            </BrowserRouter>

     </ContextApi.Provider>
    </div>
      
    </>
    // <Store/>
  );
}

export default App;
