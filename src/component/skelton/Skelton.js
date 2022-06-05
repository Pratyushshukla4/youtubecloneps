import React from 'react'
import "./Skelton.css"

const Skelton = ({type}) => {
const counter = 8
    const Feedskelton = () =>(

        <div className='skelton'>
            <div className="postimgsk"></div>
            <div className="postinfosk">
                <div className="profileimgsk"></div>
                <div className="infosk">
                    <div className="txtfirstsk"></div>
                    <div className="txtsecsk"></div>
                </div>
            </div>
    
      </div>

    );

    const Topskelton = ()=>(
        <div className="topsk">
            <div className="iconsk"></div>
            <div className="iconsk"></div>
            <div className="iconsk"></div>
            <div className="iconsk"></div>
        </div>
    )

    const Sideskelton = ()=>(
        <div className="sidesk">

            <div className="topsidesk">
            <div className="sideskicon"></div>
            <div className="sideskicon"></div>
            <div className="sideskicon"></div>
            <div className="sideskicon"></div>
            </div>

            <div className="bottomsidesk"></div>
        </div>
        
    )

    const Spinner = ()=>(
        <div className="spin">
        <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
       </div>
       </div>

    )

    const Custom = ()=>(
        <div className="custum">
            <div className="balls">
                <div className="ball ball1"></div>
                <div className="ball ball2"></div>
                <div className="ball ball3"></div>
            </div>
            <div className="custumtext">Loding...</div>
        </div>
    )
  if (type === "feed") return Array(counter).fill( <Feedskelton/>)
  if (type === "top") return ( <Topskelton/>)
  if (type === "side") return ( <Sideskelton/>)
  if (type === "spinner") return ( <Spinner/>)
  if (type === "custum") return ( <Custom/>)
   
  
}

export default Skelton
