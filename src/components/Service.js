
import React from 'react'
import './Service.css'
import { NavLink } from 'react-router-dom'

export default function Service() {
  
  return (
    <div className='main'>
        <div className='heading'>   
        <h2 className='sub-title'>Wedding / Social Events / corporate</h2>
<h1 className='title'>What We offer</h1>
<h2 className='line'>___</h2>
</div>


<div className='cards'>
<div className="card1" style={{width: 350, height:450,borderStyle:'none',backgroundColor:'rgb(231, 124, 142)'}}>
  <img src="https://www.coinguonphuquoc.com/wp-content/uploads/2020/12/help-you-to-see-whats-possible..jpg"  style={{height:200}} className="card-img-top" alt="..."/>
    <h5 className="card-title">Wedding Event</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to={'/Signup'} className='btn btn-outline-secondary'>Book Now</NavLink>
  </div>


<div className="card2" style={{width: 350, height:450,borderStyle:'none',backgroundColor:'rgb(231, 124, 142)'}}>
  <img src="http://highflyerindia.com/images/corporate-events.jpg" style={{height:200}} className="card-img-top" alt="..."/>
  
    <h5 className="card-title">Corporate Event</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to={'/Signup'} className='btn btn-outline-secondary'>Book Now</NavLink>
  
</div>


<div className="card3" style={{width: 350, height:450,borderStyle:'none',backgroundColor:'rgb(231, 124, 142)'}}>
  <img src="https://eventphotojournalism.com/wp-content/uploads/2016/08/03_social-event-photography-sweet-sixteen-event-photojournalism-rodney-bailey-1024x684.jpg" style={{height:200}} className="card-img-top" alt="..."/>
    <h5 className="card-title">Social Event</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to={'/Signup'} className='btn btn-outline-secondary'>Book Now</NavLink>
  </div>
</div>


<div className='quotes'>
<h3 className='quotes-title'>you dream, we theme</h3>
<p className='quotes-text'> Our creativity and expertise can help you plan and deliver exceptional events</p>
<NavLink to={'/Contact'} className='btn btn-outline-secondary'>Contact</NavLink>

</div>


<div className='slide'>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://yannidesignstudio.com/app/uploads/2019/08/stage-decor-decoration-ideas-floral-flower-wedding-reception-columbus-ohio.jpg" style={{height:400}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://stlawyers.ca/wp-content/uploads/2014/02/142.-Social-Events-1200x625.jpg" style={{height:400}}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.newshub.co.nz/home/new-zealand/2020/05/coronavirus-parties-social-events-limited-to-10-people-under-alert-level-2/_jcr_content/par/video/image.dynimg.1280.q75.jpg/v1589175064367/GettyImages-641274723-party-social-drinks-1120.jpg" style={{height:400}}  className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
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
