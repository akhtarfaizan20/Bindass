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
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-1672915210.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-women-1673010262.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Oversize-tshirt-women-1672915214.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-women-1673010261.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Sweater-women-1672915218.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Boyfriend-Tshirt-women-1672915204.png"},
  
  
  ]
  const data2=[{url:"https://images.bewakoof.com/uploads/grid/app/revamped-banner-MID-SIZE-B1G1-02-1673359273.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/fullsleeves-tshirts-midsize-banner-1674050707.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/midsize-banners-air-ovrszd-cargo-jogs-m-1674133076.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-printedsweatshoodsj-offer-1673631219.jpg"},    
]
const data4=[
  {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png"},
  {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg"},
   {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg"},
   {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Dress-1672907485.png"},

]
  const [data1,setData1]=useState(data)
  const [data3,setData3]=useState(data2)
  const [data5,setData4]=useState(data4)
  console.log(data1[0].url);
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
    <Carousel breakPoints={breakpoints} enableAutoPlay={true} enableTilt={true}  autoPlaySpeed={2000} enableMouseSwipe  enableSwipe={true}   showArrows={false}>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/mad-india-common--1673630619.jpg" alt="bewakoof" height={"450px"} /></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-B3A899-new1-1674029532.jpg" alt="bewakoof" height={"450px"}/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1674035537.jpg" alt="bewakoof" height={"450px"}/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/static-1x1-clearance-teesunder399-1674036686.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/winterwear-1x1-common-02-1674035538.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/mad-india-common--1673630619.jpg" height={"450px"} alt="bewakoof" /></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-B3A899-new1-1674029532.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1674035537.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/static-1x1-clearance-teesunder399-1674036686.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/winterwear-1x1-common-02-1674035538.jpg" height={"450px"} alt="bewakoof"/></Item>

    </Carousel>
       </div>
       <Img  src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg" alt="banner" className='images'/>
       <div style={{marginTop:"0px"}}>
    <Carousel breakPoints={breakpoints1} enableSwipe={true} showArrows={false} pagination={false} >
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
    <center><b>TRENDING CATEGORIES</b></center>
    <div className='items'>
    {
      data1?.map(({url},i)=>(
       <div key={i}><Img src={url} alt="bindass"/></div> 
      ))
    }
    </div>
    <div className='items2'>
    {
      data3?.map(({url},i)=>(
       <div key={i}><Img src={url} alt="bindass"/></div> 
      ))
    }
    </div>
    <div className='items3'>
    {
      data5?.map(({url},i)=>(
       <div key={i}><Img src={url} alt="bindass"/></div> 
      ))
    }
    </div>
    <div style={{marginTop:"10px"}}>
    <Carousel breakPoints={breakpoints} enableAutoPlay={true} enableTilt={true}  autoPlaySpeed={2000} enableMouseSwipe  enableSwipe={true}   showArrows={false}>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/hot-new-evrythng-1x1-01-1672806265.gif" alt="bewakoof" height={"450px"} /></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/static-1x1-indo-common-1673685812.jpg" alt="bewakoof" height={"450px"}/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/puffer-40-off-1673631220.jpg" alt="bewakoof" height={"450px"}/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/ovrszd-tees-1x1-common1-1674129220.jpg" height={"450px"} alt="bewakoof"/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/hot-new-evrythng-1x1-01-1672806265.gif" alt="bewakoof" height={"450px"} /></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/static-1x1-indo-common-1673685812.jpg" alt="bewakoof" height={"450px"}/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/puffer-40-off-1673631220.jpg" alt="bewakoof" height={"450px"}/></Item>
      <Item><Img className='carouselsm' src="https://images.bewakoof.com/uploads/grid/app/ovrszd-tees-1x1-common1-1674129220.jpg" height={"450px"} alt="bewakoof"/></Item>
      
    </Carousel>
       </div>
       </div>
  )
}

export default Homepage
