import { useEffect, useState } from 'react'
import '../Styles/home.css'
import axios from 'axios'
// import ShakeImage from  '../assets/Image/shake.jpg'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { BsPersonPlusFill } from "react-icons/bs";




const Profile = () => 
  {
    const [user, setuser] = useState( "")
    const [Image, setImage] = useState("")
    
    const navigate = useNavigate();


    useEffect(() => {
      let url = "https://galactic-bank.onrender.com/page_auth"
      let token = localStorage.getItem("token")
      axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === true) {
          console.log("success");
          if (res.data.user.profile_url == "unset") {
            null
          }else{
            setImage(res.data.user.profile_url);
          }
          setuser(res.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          localStorage.removeItem("token");
          navigate("/Signin");
        }
      });
  }, []);
  
  const Uploady =()=>{
    navigate("/upload")
  }
   
    
  return (
    <>
       
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}>
      <h5> My Profile</h5>
     </div>
     <div style={{border:"2px solid #f0f2f5",borderRadius:"10px",width:"100%",padding:"20px",backgroundColor:"#f0f2f5",color:"black"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 0px",flexDirection:"column"}}>
      <div style={{border:"3px solid gray",borderRadius:"50%",height:"100px",width:"100px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px"}}>
  {Image ? <img  style={{width:"100px",maxWidth:"100%",borderRadius:"50%",height:"100px"}} src={Image} alt="" /> : <li style={{fontSize:"50px"}}><BsPersonPlusFill /></li>  }   
    </div>
    <button onClick={Uploady} style={{padding:"10px 20px",backgroundColor:"rgba(7,70,158,1)",border:"none",borderRadius:"5px",color:"white",marginTop:"20px"}}>UpLOAD</button>
 </div>
 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"30px 10px"}}>
  <div>
    <li>First Name</li>
  </div>
  <div style={{textTransform:"capitalize",fontWeight:"bold"}}>
  {user ? <span>{user.firstname}</span> : <span>loading...    </span>}   
  </div>
  
 </div>
 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"30px 10px"}}>
  <div>
    <li>Last Name</li>
  </div>
  <div style={{textTransform:"capitalize",fontWeight:"bold"}}>
  {user ? <span>{user.lastname}</span> : <span>loading...    </span>}   
  </div>
 </div>
 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"30px 10px"}}>
  <div>
    <li>Email</li>
  </div>
  <div style={{textTransform:"capitalize",fontWeight:"bold"}}>
  {user ? <span>{user.emailInfo.email}</span> : <span>Loading...</span>}
  </div>
 </div>
 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"30px 10px"}}>
  <div>
    <li>Account Number </li>
  </div>
  <div style={{textTransform:"capitalize",fontWeight:"bold"}}>
  {user ? <span>{user.accountNo}</span> : <span>Loading...</span>}
    
  </div>
 </div>
 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"30px 10px"}}>
  <div>
    <li>Phone Number</li>
  </div>
  <div style={{textTransform:"capitalize",fontWeight:"bold"}}>
  {user ? <span>{user.phone}</span> : <span>Loading...</span>}

  </div>
 </div>
     </div>
    </>
  )
}

export default Profile