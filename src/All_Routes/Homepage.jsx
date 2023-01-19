import React, { useState } from 'react'
import "../Homepage.css"
// import Carousel from 'react-bootstrap/Carousel';
import Item from "../Item"
import Carousel from 'react-elastic-carousel'
import { Img } from '@chakra-ui/react'
import Item1 from '../Item1'

const Homepage = () => {
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  const data=[
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-printed-tshirt-men-1672915214.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Oversize-tshirt-1672915214.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-1672915219.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Sweater-1673010262.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-printed-tshirt-men-1672915214.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-1672915210.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Oversize-tshirt-women-1672915214.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-women-1673010261.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Sweater-women-1672915218.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Boyfriend-Tshirt-women-1672915204.png"},
  
  
  ]
  const [data1,setData]=useState(data)
  console.log(data1);
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
    <Carousel breakPoints={breakpoints} enableAutoPlay autoPlaySpeed={2000} enableMouseSwipe  enableSwipe   showArrows={false}>
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
       <Img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg" alt="banner" width={"100%"} height="auto" style={{marginTop:"5px"}} className='images'/>
       <div style={{marginTop:"0px"}}>
    <Carousel breakPoints={breakpoints1} enableSwipe showArrows={false} pagination={false} >
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
        <td><Img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-men-1674030025.jpg" alt="bewakoof"/></td>
        <td><Img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1674030025.jpg" alt="bindass"/></td>
      </tr>
    </table>
    <div className='items'>
{
  data1.map(({url})=>{
   <div><Img src={url} alt="bewakoof"/></div> 
  })
}
    </div>
       </div>
  )
}

export default Homepage
