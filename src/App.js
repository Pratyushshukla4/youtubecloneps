import React, { useEffect, useState }  from 'react'
import Feed from './component/Feed/Feed';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from "./component/topbar/Topbar";
import Skelton from './component/skelton/Skelton';

import "./App.css"



const App = () => {

  const [isloading , setisloading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {

      setisloading(false)
      
    }, 4000);
  },[])
  
  return (
    <>
       <Topbar/>
   <div className='app'>

     {
       isloading ? <Skelton type="side"/> : <Sidebar/> 
     }

     
      <Feed/>
      </div>
      
       </>
    
  )
  
    } 

export default App
