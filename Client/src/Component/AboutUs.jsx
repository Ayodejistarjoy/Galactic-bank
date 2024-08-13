
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import '../Styles/home.css'
import Office from '../assets/Image/bankoffice.jpg'
import Founder from '../assets/Image/founder.jpeg'
import Pres from '../assets/Image/president.jpg'
import { RiShieldKeyholeLine } from "react-icons/ri";
import { IoShield } from "react-icons/io5";
import { FaPersonCircleQuestion } from "react-icons/fa6";




const AboutUs = () => {
  return (
    <>
    
    
     <div className='imgg'>
          <img src={Office}style={{width:"100%",height:"400px",maxWidth:'100%'}} alt="" />    
    </div> 
     <div style={{backgroundColor:"#f2f2f2"}} > 
           <div style={{padding:"20px "}}> 
      <p style={{fontWeight:"bold"}}>ABOUT US</p> 
           <h2 style={{color:" rgba(9,15,121,1)",fontStyle:"30px"}}>Welcome to Galactic Bank</h2>    
          <p style={{borderBottom:"2px solid rgba(9,15,121,1)",width:"10%",padding:"10px 0px"}}></p>  
         </div>   
         

        <div style={{padding:'20px'}}>
        <p style={{marginTop:"20px"}}>
        GALACTIC BANK is a revolutionary banking application designed to make financial transactions easy, convenient, and accessible to everyone. Created in 2023 by Ayodeji joseph, the app aims to empower individuals to take control of their financial lives with a user-friendly and intuitive interface.
        </p>
     </div>
     <div className='Aboutgrid'>
     <div className="Caard shadowy">
    <ul >

            <li style={{fontSize:"70px"}}> <RiShieldKeyholeLine /></li>
        </ul>
        <p style={{padding:"0px 40px",fontSize:"20px"}}>Key Feature</p>
        <ul style={{lineHeight:"2"}}>
            <li>A : Account Management
</li>
            <li>S : Secure Transactions
</li>
            <li> I : Investment Tracking
</li>
            <li>R : Rewards and Discounts
</li>
        </ul>
</div>
<div className="Caard shadowy">
<ul >
 <li style={{fontSize:"70px"}}> <IoShield /> </li>
</ul>
<p style={{padding:"0px 40px",fontSize:"20px"}}>Our Mission</p>
<p style={{padding:" 0px 10px"}}>Our mission is to bridge the gap between traditional banking and the digital age. We strive to provide a seamless and secure platform for users to manage their finances, make transactions, and access financial services.</p>

</div>
<div className="Caard shadowy">
<ul >
 <li style={{fontSize:"70px"}}> <FaPersonCircleQuestion /> </li>
</ul>
<p style={{padding:"0px 40px",fontSize:"20px"}}>Why Choose Us</p>

<ul style={{lineHeight:"3"}}>
            <li>E :  Ease of use
</li>
            <li>C : Convenience
</li>
            <li> I : Innovation
</li>
        </ul>
</div>
     </div>
   
     <div style={{padding:"20px "}}> 
      <p style={{fontWeight:"bold"}}>PEOPLE</p> 
           <h2 style={{color:" rgba(9,15,121,1)",fontStyle:"30px"}}>Our Outstanding Leadership</h2>    
          <p style={{borderBottom:"2px solid rgba(9,15,121,1)",width:"10%",padding:"10px 0px"}}></p>  
         </div> 
         <div style={{display:"flex",justifyContent:"center",padding:"10px",backgroundColor:"rgba(9,15,121,1)",color:"#fff",alignItems:"center",fontSize:"20px"}}>
         BOARD OF LEADERS
        </div> 
        <div className='Twogrid'>
        <div className="cared"style={{marginLeft:"0px"}}>
  <div className="cared-inner">
    <div  className="cared-front">
      <img src={Founder}style={{width:"100%",maxWidth:'100%',height:"100%"}} alt="" />
    </div>
    <div className="cared-back">
    <p style={{fontSize:"20px",padding:"0px 40px"}}> Gianluigi Aponte CEO and Co Founder</p>
      
    </div>
  </div>
</div>
<div className="cared">
  <div className="cared-inner">
    <div className="cared-front">
    <img src={Pres}style={{width:"100%",maxWidth:'100%',height:"100%"}} alt="" />
      
    </div>
    <div className="cared-back">
    <p style={{fontSize:"20px",padding:"0px 40px"}}>Diego Aponte President of the organization</p>
      
    </div>
  </div>
</div>

                </div> 
     </div> 
    
  
   


    </>
  )
}

export default AboutUs