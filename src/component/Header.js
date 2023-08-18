import React,{useState} from 'react'
import './style.css'
import Linkcompo from './linkcompo'
import menu from "../logo/menu (1).png"
import Close from "../logo/close.png"

function Header() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className='the'>
      <div className="text"> <span className="rotate">The</span>Siren</div>
      <div className='humber' onClick={()=>{
       if (count % 2 === 0) {
        setCount(count + 1);
        console.log("before", count);

      } else {
        setCount(count - 1);

        console.log("after", count);
      }
      }} >
    
     {
       count === 0 ? <img src={Close} alt='not found' className='hummenu'/>:<img src={menu} alt='not found' className='hummenu'/>
     }
   
      
      </div>
    
        </div>
    
        {
      count === 0?<div className='header'><Linkcompo/></div>:""
    }
      {/* <div className='header'>
    
      <Linkcompo/>
      </div> */}
    
    </>
    
  )
}

export default Header