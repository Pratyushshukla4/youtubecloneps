import React from 'react'
import "./Post.css"

const Post = (props) => {
  return (
    <div className='feed'>

       <div className="topf">
           <img src={props.img} alt="" className="fimg" />
       </div>

       <div className="bottomf">
           <div className="leftf">
               <img src={props.img} alt="" className="userimg" />
           </div>
           <div className="rightf">
               <span className="b vidiotital">{props.tital}</span>
               <span className="b1 channelname">{props.channel}</span>
               <span className="b1 veiws">{props.veiws}</span>
           </div>
       </div>
    </div>
  )
}

export default Post
