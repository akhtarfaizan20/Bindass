import React, { useState } from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Item from "../Item"
import Carousel from 'react-elastic-carousel'
import { Img } from '@chakra-ui/react'
import Item1 from '../Item1'
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
const breakpoints1=[
  {
    width:300,itemsToShow:3
  },{
    width:656,itemsToShow:4
  },
  {
    width:760,itemsToShow:6
  },
  {
    width:1100,itemsToShow:8
  }
]
  return (
    <div>
      <div style={{marginTop:"15px"}}>
    <Carousel breakPoints={breakpoints} enableAutoPlay autoPlaySpeed={2000} enableMouseSwipe  enableSwipe>
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
      <Item><Img src="https://images.bewakoof.com/uploads/grid/app/common-new-mad-india-1674102985.jpg" height={"450px"} alt="bewakoof"/></Item>

    </Carousel>
       </div>
       <Img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg" alt="banner"/>
       <div style={{marginTop:"15px"}}>
    <Carousel breakPoints={breakpoints1} enableSwipe >
       <Item1><Img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1671624963.jpg" alt="bewakoof"   /></Item1>
       <Item1><Img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg" alt="bewakoof"   /></Item1>
       <Item1><Img src="https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg" alt="bewakoof"   /></Item1>
       <Item1><Img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg" alt="bewakoof"   /></Item1>
       <Item1><Img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" alt="bewakoof"   /></Item1>
       <Item1><Img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg" alt="bewakoof"   /></Item1>
       <Item1><Img src="https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg" alt="bewakoof"   /></Item1>
       <Item1><Img src="https://images.bewakoof.com/uploads/grid/app/image-1668598708.png" alt="bewakoof"   /></Item1>
    
    </Carousel>
  </div>
    
        <table>
        <tr>
          <td><Img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-men-1674030025.jpg" alt="banner" />
        </td>
          <td><Img src=" https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1674030025.jpg" alt="banner" />
       </td>
        </tr>
        
        </table>
        <div>
          
        </div>
   </div>   
  )
}

export default Homepage
