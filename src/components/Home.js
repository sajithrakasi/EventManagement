import React from 'react'
import image1 from '../images/banner-22.png'
import image2 from '../images/banner-2.png'
import image3 from '../images/banner-11.png'
import image4 from '../images/pro1.jpg'
import image5 from '../images/pro2.jpg'
import image6 from '../images/pro3.jpg'
import image7 from '../images/pro4.jpg'
import image8 from '../images/pro5.jpg'
import image9 from '../images/wed.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Home() {

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

  return (
    <div>

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={image2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={image1} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="..."/>
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

     {/* crousel end here */}

     <div>
      <h3 className='text1'>SAKEKA EVENTS</h3>
      <span className='text2'>A Complete Event Mangement Solution</span>
      <hr className='hr-line'></hr><br></br>
      <h4 className='text3'>The Most Successful Event Is The One That Achieves Your Goals And Exceeds Your <br></br>Expectations. Sakeka Events Does Just That!</h4>
      <button type="button" className="btn btn-outline-secondary">Read More About</button>
     </div><br></br>

     {/* section-2 ends here */}

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

    <div className='services'>
      <h3 className='text1'>OUR SERVICES</h3>
      <span className='text2'>What We Offer</span>
      <hr className='hr-line'></hr><br></br>
      
      <p class="d-inline-flex gap-1">
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Weddings
  </a>
</p>

<div className="collapse" id="collapseExample" active>
  <div className="card card-body">
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-5">
      <img src={image9} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7"id="box2">
      <div className="card-body" id="content">
        <h5 className="card-title">Wedding Event Management Company</h5>
        <p className="card-text">Sakura Events offers comprehensive wedding packages for all types of wedding celebrations. Pre Wedding, Wedding and Post Wedding functions and parties are planned with careful thought and conceptualization.</p>
        <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>

<p class="d-inline-flex gap-1">
  <a className="btn btn-primary" data-bs-toggle="collapse1" href="#collapseExample1fff" aria-expanded="false" aria-controls="collapseExample1">
   Social
  </a>
</p>

<p class="d-inline-flex gap-1">
  <a className="btn btn-primary" data-bs-toggle="collapse1" href="#collapseExample1fff" aria-expanded="false" aria-controls="collapseExample1">
   Corporate
  </a>
</p>

<div className="collapse1" id="collapseExample1">
  <div className="card card-body">
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-5">
      <img src={image9} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7"id="box2">
      <div className="card-body" id="content">
        <h5 className="card-title">anagement Company</h5>
        <p className="card-text">Sakura Events offers comprehensive wedding packages for all types of wedding celebrations. Pre Wedding, Wedding and Post Wedding functions and parties are planned with careful thought and conceptualization.</p>
        <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
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

