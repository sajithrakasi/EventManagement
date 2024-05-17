import React from 'react'
import image1 from '../images/AA.jpg'
import image2 from '../images/cart.jpg'
import image3 from '../images/pro1.jpg'
import image4 from '../images/pro2.jpg'
import image5 from '../images/pro3.jpg'
import image6 from '../images/pro4.jpg'
import image7 from '../images/pro5.jpg'
import image8 from '../images/wed.jpg'
import "./About.css"

export default function About() {
  return (
    <div>
       <h1 className='head'>About Us</h1>
<div class="container">
  <div class="row align-items-start">
    <div class="col-md-6">
       <h1 id="head">What Do We Do</h1>
    
      <ul className='fulllist'>
        <li id="a">Corporate Calendar Events</li>
        <li id="b">Promotions & Launches</li>
        <li id="c">Exhibitions Stall Designing</li>
        <li id="d">Event Marketing – Outdoor Media, Radio, Mall<br></br>Display, Product Branding</li>
        <li id="e">Brand Affiliations & Acquisitions</li>
        <li id="f">Weddings and Destination Weddings</li>
        <li id="g">Social Events</li>
        <li id="h">Event Travel Services</li>
      </ul>
    </div>
    <div class="col-md-6">
      <img className='image1' src={image1} alt=""/>
    </div>
    
  </div>
</div>

<div className='Mission Statement'>
  <h2 className='h2'>Mission Statement</h2>
  <p className='para'>Sakura Events’ primary mission is to plan and execute outstanding events for each client with exceptional professionalism and the utmost attention to budgets and details.<br></br>Sakura Events was founded in 2010 by its promoter Salome Sathaye in Mumbai, India.<br></br> Sachin Dand joined the company in 2012 as a partner and under the leadership of both Salome and Sachin, Sakura Events grew to be known as one of the most trustworthy event management companies in India.<br></br> With a plethora of well-known brands and luxury events under their umbrella, Sakura Events is now proudly operational in Dubai, UAE. A decade of unparalleled experience and customer loyalty, Sakura Events plans to reach new horizons in the event management space.</p>
</div>

<h2 className='blog'>Our Blogs</h2>

<div className="animate">
  <div className="containewr">
    <div className="section-text">
      
    </div>
    <div className="fill">
      <div className="marquee">
          <img src={image2} alt=""/>
          <img src={image3} alt="" />
          <img src={image4} alt=""/>
          <img src={image5} alt=""/>
          <img src={image1} alt=""/>
          <img src={image6} alt=""/>
          <img src={image7} alt=""/>
          <img src={image8} alt=""/>
          <img src={image2} alt=""/>
          <img src={image3} alt=""/>
          <img src={image4} alt=""/>
          <img src={image5} alt=""/>
      </div>
    </div>
  </div>
</div>

<div className='footer'>
  <div className='list' >  
  <h3> Services we offer</h3>
  <ul >
    <li>Wedding Event</li>
    <li>Corporate Event</li>
    <li>Social Event</li>
  </ul>
<a href='https://www.instagram.com/'><img src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg' alt='' style={{height:20,width:20}}/>Instagram</a>
<a href='https://www.facebook.com/'><img src='https://www.facebook.com/images/fb_icon_325x325.png' alt='' style={{height:20,width:20}}/>FaceBook</a>
<a href='https://www.instagram.com/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553' alt='' style={{height:20,width:20}}/>Twitter</a>
</div>

<div className='address' >
<h3 > Reach Us</h3>
<p>Coimbatore:3/1,Athipalayam,Coimbatore,641110</p>

</div>

</div>

    </div>
  )
}
