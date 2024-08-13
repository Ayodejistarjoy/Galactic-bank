import { useLocation } from 'react-router-dom';
import '../Styles/home.css'
import { Link } from 'react-router-dom'

import { IoHome } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";




const Navend = () => {
    const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }
  if (location.pathname === "/about") {
    return null;
  }
  if (location.pathname === "/contact") {
    return null;
  }
  if (location.pathname === "/login") {
    return null;
  }
  if (location.pathname === "/register") {
    return null;
  }
  if (location.pathname === "/feature") {
    return null;
  }
  if (location.pathname === "/transfer") {
    return null;
  }

  return (
    <>
     <nav style={{backgroundColor:"#f9f9fa",color:"black",width:"100%",position:"fixed",bottom:"0",padding:"0px 20px" }}>
  
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:""}}>
  <div>
  <Link to ={"/dashboard"} style={{ textDecoration:"none",color:"black"}}>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><IoHome />
      </li>
      <li>
            Home    
      </li>
      </Link>
      </div>
      <div>
      <Link to ={"/dashboard"} style={{ textDecoration:"none",color:"black"}}>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><GiTakeMyMoney />

      </li>
      <li>
            FInance   
      </li>
      </Link>

      </div>
      <div>
      <Link to ={"/dashboard"} style={{ textDecoration:"none",color:"black"}}>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}>
        <FaCreditCard />
      </li>
      <li>
   
            Card    
              
      </li>
      </Link>
      </div>
      <div>
      <Link to ={"/profile"} style={{ textDecoration:"none",color:"black"}}>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><IoPerson />

      </li>
      <li style={{marginLeft:"10px"}}>
      
            Me    
              
      </li>
      </Link>
      </div>
    
  </div>
  
</nav>

    </>
  )
}

export default Navend