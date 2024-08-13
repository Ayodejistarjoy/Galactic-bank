
import '../Styles/home.css'
import Fine from '../assets/Image/fine.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";


const Contact = () => {
  return (
    <>
    <div className='contact-one'> 
     <div style={{padding:" 30% 20px"}}>
        <p style={{fontSize:"30px",fontWeight:"bold",color:" rgba(9,15,121,1)"}}>True Serve</p>
        <p style={{fontSize:"20px"}}>It does not matter what time it is or where you are, you can call our Interactive Contact Centre and stay close to your bank 24/7.</p>
     </div>
     <div>
        <img src={Fine} style={{width:"100%",height:"90%"}} alt="fine"/>
     </div>
    </div>
    <div 
     style={{display:"grid",gridTemplateColumns:"100%"}}>
        <div>
            <div style={{padding:"10px"}}>
            <p style={{fontSize:"15px",fontWeight:"bold",color:"rgba(9,15,121,1)"}}>CONTACT US</p>
            <p style={{fontSize:"15px"}}>If you have any questions or need any assistance, please do not hesitate to contact us. We are here to help you every step of the way.</p>
            <p style={{fontSize:"15px"}}>The Interactive Contact Centre allows our customers have the opportunity to speak to any of our agents, any day, and any time.</p>
            </div>
            <div className='contact-two'>
                <div>
                    <ul style={{fontSize:"30px",lineHeight:"50px"}}>
                        <li><FaPhoneVolume /></li>
                        <li style={{fontSize:"15px",fontWeight:"bold"}}>Call Us</li>
                        <li style={{fontSize:"15px",color:"rgba(9,15,121,1)"}}>General Enquiry</li>
                        <li style={{fontSize:"15px"}}>0009111</li>
                    </ul>

                </div>
                <div>
                <ul style={{fontSize:"30px",lineHeight:"50px"}}>
                        <li><MdAttachEmail /></li>
                        <li style={{fontSize:"15px",fontWeight:"bold"}}>Email</li>
                        <li style={{fontSize:"15px",color:"rgba(9,15,121,1)"}}>Important Enquiry</li>
                        <li style={{fontSize:"15px"}}>galacticbank4133@gmail.com</li>
                    </ul>
                </div>
                <div>
                <ul style={{fontSize:"30px",lineHeight:"50px"}}>
                <li><IoLogoWhatsapp /></li>
                        <li style={{fontSize:"15px",fontWeight:"bold"}}>WhatsApp</li>
                        <li style={{fontSize:"15px",color:"rgba(9,15,121,1)"}}>General Enquiry</li>
                        <li style={{fontSize:"15px"}}>+1 (719) 398-1264</li>
                    </ul>
                </div>

            </div>

        </div>
        

    </div>

    </>
  )
}

export default Contact