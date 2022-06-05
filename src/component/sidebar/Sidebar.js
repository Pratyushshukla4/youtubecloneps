import React from 'react'
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="tops">

            <div className="home">
                <img src="/assests/home.png" alt="" className="hicon" />
                <span className="hname">Home</span>
            </div>
            <div className="home">
                <img src="/assests/explore.png" alt="" className="hicon" />
                <span className="hname">explore</span>
            </div>
            <div className="home">
                <img src="/assests/subscribe.png" alt="" className="hicon" />
                <span className="hname">subscribe</span>
            </div>
            <div className="home">
                <img src="/assests/library.png" alt="" className="hicon" />
                <span className="hname">library</span>
            </div>

        </div>
        <div className="bottoms"></div>
      
    </div>
  )
}

export default Sidebar
