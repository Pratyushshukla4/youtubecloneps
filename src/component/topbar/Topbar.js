// import React from 'react'
import React, { useEffect, useState } from 'react'
import Skelton from '../skelton/Skelton'
import "./Topbar.css"

const Topbar = () => {
  const [isloading , setisloading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {

      setisloading(false)
      
    }, 3000);
  },[])
  return (
    <>
      <div className="topbar">
          <div className="left">
              <div className="drop">
                    
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
              </div>
              <div className="yticon">
                  <img src="/assests/youtube.png" alt="" className=" w yicon" />

                  <span className="yname">Youtube</span>
              </div>
          </div>

          <div className="center">

              <div className="inse">
              <input placeholder='Search' className="searcinout"></input>
              <span className="sic">
              <img src="/assests/search.png" alt="" className=" searchicon" />
              </span>
              </div>
              <span className="vic">
              <img src="/assests/mic.png" alt="" className=" voiceicon" />
              </span>
             
          </div>
 
          {
            isloading ? <Skelton type="top"/> :
            <>
            <div className="right">
          <img src="/assests/video.png" alt="" className="w vedioicon" />
              
          <div className=" drop9">

              <div className="row1">
                    
                    <div className="line9"></div>
                    <div className="line9"></div>
                    <div className="line9"></div>
                 </div>
                 <div className="row1">
                    
                    <span className="line9"></span>
                    <span className="line9"></span>
                    <span className="line9"></span>
                 </div>
                 <div className="row1">
                    
                    <span className="line9"></span>
                    <span className="line9"></span>
                    <span className="line9"></span>
                 </div>
              </div>
              <img src="/assests/bell.png" alt="" className="w notificationicon" />
            
              <img src="/assests/man.jpg" alt="" className="w profile" />
          </div>
            </>
          }

          

         
      </div>
    </>
  )
}

export default Topbar
