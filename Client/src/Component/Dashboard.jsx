import { useEffect, useState } from 'react'
import '../Styles/home.css'
import axios from 'axios'
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaSdCard } from "react-icons/fa6";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { MdCellWifi } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiSquareMore } from "react-icons/ci";
import { AiFillNotification } from "react-icons/ai";
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { BsPersonPlusFill } from "react-icons/bs";








const Dashboard = () => {
  const [user, setuser] = useState( "")
  const [Image, setImage] = useState("")
  const Navigate = useNavigate();
  useEffect(() => {
    let url = "https://galactic-bank.onrender.com/page_auth"
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      console.log(res.data)
      setuser(res.data.user)
      if (res.data.user.profile_url == "unset") {
        null
      }else{
        setImage(res.data.user.profile_url);
      }
    })
    .catch(err => {
      console.log(err)
    })

  }, [])
  const Logout = () =>{
    localStorage.removeItem("token")
   Navigate("/")
  }

 
  

  return (
    <div>
    <div  style={{padding:"20px 20px"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
   
<div>

        <div className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          
          {Image ? <img   style={{width:"50px",maxWidth:"100%",borderRadius:"50%",height:"50px"}} src={Image} alt="" /> : <li style={{fontSize:"40px"}}><BsPersonPlusFill /></li>  } 
    </div>
        <ul className="dropdown-menu">
    <li>
  <Link to ={"/profile"} style={{ textDecoration:"none",color:"black"}}>
      <a style={{margin:"auto",textAlign:"center",display:"block",padding:"5px 0px"}} className="dropdown-item" href="#"> My Profile</a>
      </Link>
      </li>
    <li>
    <Link to ={"/contact"} style={{ textDecoration:"none",color:"black"}}>
      <a style={{margin:"auto",textAlign:"center",display:"block",padding:"5px 0px"}} className="dropdown-item" href="#"> Need Help</a>
      </Link>
    </li>
    <li>
      
      <a onClick={Logout} style={{width:"50%", margin:"auto",textAlign:"center",display:"block",backgroundColor:"#000000",borderRadius:"5px",color:"white",padding:"5px",textDecoration:"none",}} className="dropdown-item  mt-2  " href="#"> Log Out</a>
     
    </li>
  </ul>
</div>

        <h6>Hi, {user ? <span>{user.firstname}</span> : <span>Loading...</span>}</h6>
      </div>
      <div>
        <li style={{fontWeight:"bold",color:"#000000",fontSize:"30px"}}><IoIosNotificationsOutline /></li>
      </div>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0px"}}>
      <div>
        <li style={{color:"rgba(9,15,121,1)"}}>Account(s)</li>
      </div>
      <div>
        <li style={{textDecoration:"underline",color:"rgba(9,15,121,1)"}}>View all Accounts</li>
      </div>
    </div>
    <div style={{border:"2px solid rgba(9,15,121,1)",borderRadius:"10px",width:"100%",height:"230px",padding:"10px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}>
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
   <div style={{display:"flex",flexDirection:"column"}}>
    <span>Balance</span>
    <span style={{fontWeight:"bold",fontSize:"15px"}}>{Number(user.accountBal).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
   </div>
   <div style={{display:"flex",flexDirection:"column"}}>
    <span>Status</span>
    <span style={{fontWeight:"bold",fontSize:"15px"}} >Active</span>
   </div>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px"}} >
    <div >
    <span>Account Number</span>
   </div>
   <div>
    <span>Type</span>
   </div>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} >
    <div>
      <span style={{fontWeight:"bold",fontSize:"15px"}}>{user.accountNo}</span>
    </div>
    <div>
      <span style={{fontWeight:"bold",fontSize:"15px"}}> Tier 3 Saving Account</span>
    </div> 
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"25px"}} >
      <button style={{padding:"10px 20px",backgroundColor:"rgba(7,70,158,1)",border:"none",borderRadius:"5px",color:"white"}}>Fund Account</button>
      <button style={{padding:"10px 20px",backgroundColor:"rgba(7,70,158,1)",border:"none",borderRadius:"5px",color:"white"}}>Transaction History</button>
        
    </div>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"25px"}} >
    <div>
     <li style={{fontWeight:"bold",color:"rgba(9,15,121,1)"}}>My Favourites</li>
    </div>
    <div>
      <li style={{textDecoration:"underline",color:"rgba(9,15,121,1)"}}>Edit Favourites</li>
    </div>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 40px"}}>
      <div>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><FaSdCard />
      </li>
      <li>Airtime</li>

      </div>
      <div>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><BiMoneyWithdraw />
      </li>
      <li>
      <Link to="/transfer" style={{textDecoration:"none", color: "black"}}>
      Send Money
      </Link></li>

      </div>
      <div>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><FaMoneyBillWheat />
      </li>
      <li>Bill Payment</li>
      </div>
    </div>

  <div style={{border:"2px solid rgba(9,15,121,1)",borderRadius:"10px",width:"100%",height:"300px",padding:"10px ",backgroundColor:"rgba(9,15,121,1)",color:"white"}}>
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px "}}>
  <div>
  <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",backgroundColor:"rgba(9,15,121,1)",color:"white",margin:"10px 0px"}}><MdCellWifi />
      </li>
      <li>Data</li>
      </div>
      <div>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><BiMoneyWithdraw />
      </li>
      <li>Send</li>
      </div>
      <div>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><MdOutlineSportsVolleyball />
      </li>
      <li>Betting</li>
      </div>
      <div>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><HiOutlineComputerDesktop />
      </li>
    <li style={{marginLeft:"10px"}}>TV</li>
      </div>
  </div>
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"40px",padding:"10px"}}>
  <div>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><FaMoneyCheckDollar />

      </li>
      <li>Invest</li>
      </div>
      <div>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><GiReceiveMoney />

      </li>
      <li>Loan</li>
      </div>
      <div>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><IoGameControllerOutline />
      </li>
      <li>Games</li>
      </div>
      <div>
      <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><CiSquareMore />

      </li>
      <li>More</li>
      </div>
</div>
  </div>
  <div style={{border:"2px solid #f9f9fa",borderRadius:"10px",width:"100%",height:"100px",padding:"10px",backgroundColor:"#f9f9fa",color:"black", marginTop:"20px",marginBottom:"30%"}}>
    <div style={{display:"flex",alignItems:"center",gap:"20px",}}>
    <li style={{border:"1px solid gray",borderRadius:"50%",height:"50px",width:"50px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",backgroundColor:"rgba(9,15,121,1)",color:"white"}}><AiFillNotification /></li>
    <div>
     <h3>Easy Cashout !</h3>
     <li>Invites friends and earn uo to $50 cash </li>
    </div>
     </div>
</div>




    </div>
   
  
    
    </div>
  )
}

export default Dashboard