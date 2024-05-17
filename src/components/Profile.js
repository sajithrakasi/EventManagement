import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import image3 from '../images/wed.jpg'
import image4 from '../images/pro1.jpg'
import image5 from '../images/pro2.jpg'
import image6 from '../images/pro3.jpg'
import image7 from '../images/pro4.jpg'
import image8 from '../images/pro5.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Profile() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const auth = useAuth()
  const navigate = useNavigate()

  const handlelogout = ()=>{
    auth.logout()
    navigate('/')
  }
  return (
    <div id="book"style={{ backgroundImage:`url(${image3})` }}>
       <div className='ttt'>
     <h1 className="animate-charcter">welcom {auth.user}</h1> </div><br></br>
      <button id="profile-button"onClick = {handlelogout}>logout</button><br></br><br></br><br></br>


      <Carousel responsive={responsive} className='slides'>
      
      <div>
   <img src={image8} alt="..." className='image-1'/>
   </div>
   
   <div> <img src={image6} alt="..." className='image-2'/></div>
   <div> <img src={image7} alt="..."className='image-3'/></div>
   <div> <img src={image5} alt="..." className='image-4'/></div>
   
   <div>
   <img src={image4} alt="..."className='image-5'/>
   </div>
 </Carousel><br></br>
    </div>
  )
}
