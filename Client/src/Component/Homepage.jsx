import '../Styles/home.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import Photo from  '../assets/Image/image.png'
import { CiBank } from "react-icons/ci";
import { RiBankCardFill } from "react-icons/ri";
import { IoPhonePortrait } from "react-icons/io5";
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <>
    <div className='Ayo'>
   
    <div className='second'>
        <div style={{padding:"30px 10px"}}>
            <p style={{padding:"20px 10px",fontSize:"1em",color:"gray"}}>Galactic card terminals</p>
            <h1 style={{fontSize:"4em",}}>Quick,simple and safe transactions.</h1>
            <p style={{padding:"15px 0px"}}>With Galactic Bank, you can access a range of financial solutions tailored to your business needs,including loans,investments and trade finance. Get the resources you need to grow and expand your reach</p>
            <button style={{padding:"10px 20px",fontSize:"1em",borderRadius:"10px",border:"none",backgroundColor:"#008000",color:"white"}}>
              
              <Link to ={"/register"} style={{color:"white", textDecoration:"none"}}>
            Create an Account   
               </Link>
              </button>
        </div>
        <div>
        <img style={{width:"80%",maxWidth:"100%"}} src={Photo} alt="" />
        </div>
    </div>
    </div>
    <footer>
      <div className='footer container-fluid'>
        <div>
          <h1 style={{fontSize:"4em",padding:"10px"}} >How We Protect You</h1>
        </div>
        <div>
          <ul style={{display:"flex",justifyContent:"flex-start"}} >
          <li style={{border:"1px solid gray",borderRadius:"50%",height:"40px",width:"40px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px"}}><IoPhonePortrait /></li>
          </ul>
          <p style={{marginLeft:"40px",fontSize:"1.3em"}}>Secure Mobile Banking</p>
          <li style={{marginLeft:"40px"}} >Our mobile banking app is designed with the same level of security as World Bank own</li>
        </div>
        <div>
          <ul style={{display:"flex",justifyContent:"flex-start"}} >
          <li style={{border:"1px solid gray",borderRadius:"50%",height:"40px",width:"40px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px"}}><CiBank /></li>
          </ul>
          <p style={{marginLeft:"40px",fontSize:"1.3em"}}>Secure Online Banking</p>
          <li style={{marginLeft:"40px"}} >Our online platform is built with multiple layers of security to safegaurd you </li>
        </div>
        <div>
          <ul style={{display:"flex",justifyContent:"flex-start"}} >
          <li style={{border:"1px solid gray",borderRadius:"50%",height:"40px",width:"40px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px"}}><RiBankCardFill /></li>
          </ul>
          <p style={{marginLeft:"40px",fontSize:"1.3em"}}>Fraud Monitoring</p>
          <li style={{marginLeft:"40px"}} >We have a sophisticated fraud detection system in place to monitor your activities</li>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Homepage