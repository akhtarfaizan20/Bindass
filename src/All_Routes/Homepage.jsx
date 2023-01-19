import React, { useState } from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Item from "../Item"
import Carousel from 'react-elastic-carousel'
import { Img } from '@chakra-ui/react'
const Homepage = () => {
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  const breakpoints=[
    {
      width:1,itemsToShow:1
    },{
      width:550,itemsToShow:1
    },
    {
      width:760,itemsToShow:2
    },
    {
      width:1100,itemsToShow:3
    }
]
  return (
    <div>
      <div style={{marginTop:"15px"}}>
    <Carousel breakPoints={breakpoints} enableAutoPlay autoPlaySpeed={2000}>
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/mad-india-common--1673630619.jpg" alt="bewakoof" height={"450px"} /></Item>
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-B3A899-new1-1674029532.jpg" alt="bewakoof" height={"450px"}/></Item>
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1674035537.jpg" alt="bewakoof" height={"450px"}/></Item>
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/static-1x1-clearance-teesunder399-1674036686.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/winterwear-1x1-common-02-1674035538.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/mad-india-common--1673630619.jpg" height={"450px"} alt="bewakoof" /></Item>
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-B3A899-new1-1674029532.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1674035537.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/static-1x1-clearance-teesunder399-1674036686.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/winterwear-1x1-common-02-1674035538.jpg" height={"450px"} alt="bewakoof"/></Item>

    </Carousel>
       </div>
       </div>
  )
}

export default Homepage
