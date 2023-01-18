import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Homepage = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
       <div style={{width:"100%",height:"400px"}}> <Carousel activeIndex={index} onSelect={handleSelect}>
       <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.bandhanbank.com/sites/default/files/2021-04/Bandhan_Myntra_Offer_Banner_02.jpg"
        alt="Second slide"
      />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.paytrigo.com/wp-content/uploads/2020/08/myntra-coupon-detail.jpg"
        alt="Third slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.gyftr.com/blog/wp-content/uploads/2019/04/banners21554285340.jpg"
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg
        "
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg
        "
        alt="First slide"
      />
     
    </Carousel.Item>
    </Carousel>   </div> </div>
  )
}

export default Homepage
