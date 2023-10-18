import React,{useState} from 'react'
import {PiHexagonBold,PiKeyBold} from "react-icons/pi";
import { BiCube } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { PiHandCoinsBold } from "react-icons/pi";
import { BiSolidOffer} from "react-icons/bi";
import {MdOutlineLiveHelp} from "react-icons/md";
import { FaRegUserCircle} from "react-icons/fa";
import './Nav.css'
import { FaBars,FaTimes} from "react-icons/fa";


function Nav() {
   const[isClicked,setIsClicked]=useState(false);
   
  const clickClose = ()=>{
    setIsClicked(true);
    console.log("close")
  }
  const clickOpen = ()=>{
    setIsClicked(false);
    console.log("open")
  }
    
  return (
<>
    <div className='nav'>
    <div>
    <h1><PiHexagonBold style={{fontSize:"1.5rem"}}/>&nbsp;&nbsp;Dashboard</h1>
        <ul>
            <li style={{backgroundColor:"rgb(45,45,105)",padding:".80rem 1rem",borderRadius:"5px"}}><div className='list'><PiKeyBold/>         &nbsp; <h3> Dashboard  </h3> </div></li>
            <li><div className='list'><BiCube/>           &nbsp; <h3>Product  </h3> </div> <span>{">"}</span></li>
            <li><div className='list'> <HiUsers/>           &nbsp; <h3>Customers  </h3> </div> <span>{">"}</span></li>
            <li><div className='list'>  <PiHandCoinsBold/>         &nbsp; <h3>Income  </h3> </div> <span>{">"}</span></li>
            <li><div className='list'> <BiSolidOffer/>          &nbsp; <h3>Promote </h3> </div> <span>{">"}</span></li>
            <li><div className='list'> <MdOutlineLiveHelp/>         &nbsp; <h3>Help  </h3> </div> <span>{">"}</span></li>
            {/* <li><HiUsers/>          &nbsp; Customer   <span>{">"}</span></li>
            <li><PiHandCoinsBold/>  &nbsp; Income     <span>{">"}</span></li>
            <li><BiSolidOffer/>     &nbsp; Promote    <span>{">"}</span></li>
            <li><MdOutlineLiveHelp/>&nbsp; Help       <span>{">"}</span></li> */}
        </ul>
        </div>
        <div className='profile'>

           <FaRegUserCircle className='icons' style={{color:"white"}}/>

           <div className='profile1'>
            <h4>Evano</h4>
            <p>Project Manager</p>
           </div>
           <h2>{"⌄"}</h2>
        </div>
       
    </div>
    <div className='nav1' style={{width:isClicked?"15%":"35%"}}>
     <div className='bars'>

      
<h2 className='icons'> {isClicked?<FaBars  onClick={clickOpen}/>:<FaTimes  onClick={clickClose} />}</h2>&nbsp;&nbsp;
</div>
{isClicked?<p  style={{ backgroundColor: "rgb(4, 4, 64)",
  width: "15%",
  height: "100%"}}></p>:  
    <>
    <div>
    <h1><PiHexagonBold style={{fontSize:"1.5rem"}}/>&nbsp;&nbsp;Dashboard</h1>
        <ul>
            <li style={{backgroundColor:"rgb(45,45,105)",padding:".80rem 1rem",borderRadius:"5px"}}><div className='list'><PiKeyBold/>         &nbsp; <h3> Dashboard  </h3> </div></li>
            <li><div className='list'><BiCube/>           &nbsp; <h3>Product  </h3> </div> <span>{">"}</span></li>
            <li><div className='list'> <HiUsers/>           &nbsp; <h3>Customers  </h3> </div> <span>{">"}</span></li>
            <li><div className='list'>  <PiHandCoinsBold/>         &nbsp; <h3>Income  </h3> </div> <span>{">"}</span></li>
            <li><div className='list'> <BiSolidOffer/>          &nbsp; <h3>Promote </h3> </div> <span>{">"}</span></li>
            <li><div className='list'> <MdOutlineLiveHelp/>         &nbsp; <h3>Help  </h3> </div> <span>{">"}</span></li>
            {/* <li><HiUsers/>          &nbsp; Customer   <span>{">"}</span></li>
            <li><PiHandCoinsBold/>  &nbsp; Income     <span>{">"}</span></li>
            <li><BiSolidOffer/>     &nbsp; Promote    <span>{">"}</span></li>
            <li><MdOutlineLiveHelp/>&nbsp; Help       <span>{">"}</span></li> */}
        </ul>
        </div>
        <div className='profile'>

           <FaRegUserCircle className='icons' style={{color:"white"}}/>

           <div className='profile1'>
            <h4>Evano</h4>
            <p>Project Manager</p>
           </div>
           <h2>{"⌄"}</h2>
        </div>
        </>}
    </div>
    </>
  )
}

export default Nav
