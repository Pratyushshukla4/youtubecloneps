import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
// import Sidebar from '../sidebar/Sidebar'
import Skelton from '../skelton/Skelton'
// import Post from './component/post/Post';
// import Sidebar from './component/sidebar/Sidebar';
import "./Feed.css"

const Feed = () => {

  const [isloading , setisloading] = useState(true)

    useEffect(()=>{
      setTimeout(() => {

        setisloading(false)
        
      }, 4000);
    },[])

  return (
    <div className='post'>     
{

   isloading ?  <Skelton type="feed"/>  : 
   <>
    <Post img={"assests/s1.jpg"} veiws={"1.4M"} tital={"Barish"} channel={"T-Series"}/> 
    <Post img={"assests/s22.jpg"} veiws={"1.9M"} tital={"Meri Hasi"} channel={"Magic Music"}/> 
    <Post img={"assests/s3.jpg"} veiws={"4.1M"} tital={"Teri Mitti"} channel={"Piyush Baja"}/> 
    <Post img={"assests/s4.jpg"} veiws={"9.1M"} tital={"Sabse bda yodha"} channel={"Pankaj Band"}/> 
    <Post img={"assests/s5.jpg"} veiws={"5.3M"} tital={"Ranjha"} channel={"Dev Barat"}/> 
    <Post img={"assests/s6.jpg"} veiws={"8.3K"} tital={"Khwaish mein teri"} channel={"Set India"}/> 
    <Post img={"assests/s7.jpg"} veiws={"8.2K"} tital={"Tum chupa na sakoge"} channel={"Ahv Studio"}/> 
    <Post img={"assests/s8.jpg"} veiws={"1.6M"} tital={"Hindi song"} channel={"90 Bollywood songs"}/> 
    <Post img={"assests/s9.jpg"} veiws={"1M"} tital={"Hindi song"} channel={"MKV media"}/> 
    <Post img={"assests/s10.jpg"} veiws={"5.3M"} tital={"Telugu song"} channel={"90 Bollywood songs"}/> 
    <Post img={"assests/s11.jpg"} veiws={"9.1M"} tital={"Lofi song"} channel={"Hits songs"}/> 
    <Post img={"assests/s12.jpg"} veiws={"1.4M"} tital={"Punjabi song"} channel={"Punjabi songs"}/> 
    </>
     
    
      }
 </div>
  )
}

export default Feed
