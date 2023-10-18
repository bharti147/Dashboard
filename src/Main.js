import React from 'react'
import './Main.css'
import Card from './components/Card'
import {AiOutlineDollar } from "react-icons/ai";
import { PiHandCoinsBold } from "react-icons/pi";
import { MdOutlineAssignment } from "react-icons/md";
import { HiOutlineShoppingBag} from "react-icons/hi2";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie } from 'recharts';
import { PieChart } from 'react-minimal-pie-chart';
import p1 from './assets/p1.jpg';
import p2 from './assets/p2.jpg';
import Content from './components/Content';
import Nav from './components/Nav';
function Main() {
  const augColor = "#5A32EA";

  const data = [
    {
      name: 'Jan',
      uv: 4000,
      
    },
    {
      name: 'Feb',
      uv: 3000,
     
    },
    {
      name: 'Mar',
      uv: 8000,
   
    },
    {
      name: 'Apr',
      uv:6000,
  
    },
    {
      name: 'May',
      uv: 7000,
   
    },
    {
      name: 'Jun',
      uv: 2000,
  
    },
    {
      name: 'Jul',
      uv: 6500,
     
    },
    {
      name: 'Aug',
      uv: 8500,
    
    },
    {
      name: 'Sep',
      uv: 7500,
     
    },
    {
      name: 'Oct',
      uv: 6000,
  
    },
    {
      name: 'Nov',
      uv: 5000,
      
    },
    {
      name: 'Dec',
      uv: 5500,
   
    },
    
  
    
  ];
  const updatedData = data.map(item => {
    if (item.name === 'Aug') {
      return { ...item, uv: 8500, fill: augColor };
    } else {
      return item;
    }
  });

const piedata = [
  { name: 'One', value: 10, color: '#F7268E', startAngle: -80, lengthAngle:0  },
  { name: 'Two', value: 15, color: '#5A34EA', startAngle: 0, lengthAngle: 120 },
  { name: 'Three', value: 20, color: '#F1EFFC', startAngle: 120, lengthAngle: 360 },
];

const updatedPieData = piedata.map(item => {
  if (item.name === 'Two') {
    return { ...item,lineWidth:80 };
  } else {
    return item;
  }
});
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className='main'>
   <Nav/>
    <main>
    <div className='part1'>
        <h1>Hello Shahrukh👋,</h1>
        <input type="text" placeholder="🔍 Search"/>
        </div>
        <div className='part2'>
         {/* <div className='card'>
<div className='box'></div>
          <div className='card1'>
            <p>Earning</p>
            <h4>$198k</h4>
            <p><span>↑ 37.8%</span>this month</p>
          </div>
         </div> */}
         <Card color1={"rgb(228,255,240)"} color2={"rgb(30,170,73)"}  color3={"rgb(1,171,75)"} icon={<AiOutlineDollar/>}  one={"Earning"} two={"198"} three={"↑ 37.8"} />
         <Card color1={"rgb(231,219,255)"} color2={"rgb(224,90,137)"} color3={"rgb(162,0,255)"} icon={<MdOutlineAssignment/>} one={"Orders"} two={"2.4"} three={"↓ 2"} />
         <Card color1={"rgb(204,242,255)"} color2={"rgb(224,90,137)"} color3={"rgb(64,133,210)"} icon={ <PiHandCoinsBold/>  } one={"Balance"} two={"2.4"} three={"↓ 2"} />
         <Card color1={"rgb(254,197,233)"} color2={"rgb(30,170,73) "} color3={"rgb(226,46,72)"} icon={<HiOutlineShoppingBag/>} one={"Total Sales"} two={"89"} three={"↑ 11"} />
        
       
    
        
        </div>
        <div className='part3'>
        <div className='part3Child'>
        <div className='details'>
          <div className='details1'> 
            <h1>Overview</h1>
            <p>Monthly Earning</p>
          </div>
          <select readOnly>
        <option >Quarterly</option>
       
      </select>
        </div>
           <div className='bar'>
          
           <ResponsiveContainer width="100%" height="100%">
         
        <BarChart height={10} width={100} data={updatedData}>
         <Bar dataKey="uv" fill="#F2EFFF"  />
         
         
          
           <XAxis dataKey="name" axisLine={false} tickLine={false} style={{ textAnchor: 'middle' }} />
     
          
          
          
        </BarChart>
       
      </ResponsiveContainer>
    
           </div>
           </div>
           <div className='pie'>
            <h1>Customers</h1>
            <p>Customers that buy products</p>
            <div className='piechart'>
            
            <PieChart  lineWidth={40}
  data={updatedPieData}
  
/>
<div className='text-in-center'>
            <p><span style={{fontWeight:700,color:'black',fontSize:'1.15rem'}}>65%</span> <br/>Total New <br/>Customers</p>
          </div>
            </div>
           </div>
        </div>
        <div className='part4'>
          <div className='mainHeading'>
            <h1>Product Sell</h1>
            <input type="text" placeholder='Search'/>
            <select>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className='subHeading'>
            <h4>Product Name</h4>
            <h5>Stock</h5>
            <h5>Price</h5>
            <h5>Total Sales</h5>
          </div>
         
          <Content url={p1} heading={"Abstract 3D"} para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} stock={"32 in stock"} price={"$45.99"} total={"20"}/>
          
          <Content url={p2} heading={"Sarphens Illustration"} para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} stock={"32 in stock"} price={"$45.99"} total={"20"}/>
          <Content url={p1} heading={"Abstract 3D"} para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} stock={"32 in stock"} price={"$45.99"} total={"20"}/>
          
          
            
       
            
         
            
            
          
        </div>
        
    </main>
      
    </div>
  )
}

export default Main
