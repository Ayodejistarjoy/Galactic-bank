import '../Styles/home.css'
import ShakeImage from  '../assets/Image/shake.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineExclamation } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom"





const Signin = () => {
    const Navigate = useNavigate();
    
    let url = "http://localhost:8200/signin";
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
        console.log(values);
        axios
        .post(url, values)
        .then((res) => {
            // console.log(res);
            
            toast.success(" log In Successful");
            // console.log(res.data);
            Navigate("/dashboard");
             const token = res.data.token
             localStorage.setItem("token", token);
        })
        .catch((err) => {
            console.log(err);
            toast.error("Invalid Credentials");
        })
        },
      });
    
  return (
    <>
    <div className='Bigfflex'>
       
       
        <div className='Make'>
            <ul className='Go'>
                <li>
                <Link to ={"/"} style={{color:"rgba(9,15,121,1)", textDecoration:"none"}}>
            Go to Ayodeji Home    
               </Link>
                </li>
            </ul>
            <div className='Formy'>
            <div style={{display:"flex",alignItems:"start",flexDirection:"column",}}>
            <h6 style={{fontSize:"20px"}}>Welcome Back<AiOutlineExclamation /></h6>
          <p style={{borderBottom:"3px solid rgba(9,15,121,1)",width:"10%",padding:"3px 0px",marginBottom:"40px"}}></p>  
            </div>
            <form className='Sign' action="" onSubmit={formik.handleSubmit}>
                <div style={{padding:"20px 0px"}}>
                <label style={{color:" rgba(9,15,121,1)",padding:"10px 0px"}} htmlFor="">Email Address</label>
                <input className='inputy'
                type="email"
                 name="email"
                  id="email" 
                  onChange={formik.handleChange}
         value={formik.values.email}
                  />
                </div>

                <div style={{padding:"20px 0px"}}>
                     <div className='wee'> 
                <label style={{}} htmlFor="">Password</label>
                <label style={{color:" rgba(9,15,121,1)"}} htmlFor="">Forget password?</label>
                 </div> 
                <input className='inputy'
                 type="password"
                  name="password" 
                  id="password"
                  onChange={formik.handleChange}
         value={formik.values.password}
                   />
                </div>
                <button style={{backgroundColor:"rgba(9,15,121,1)",color:"#fff",marginTop:"20px"}} className='inputy' type='submit'>Login</button>
            </form>
            </div>
            <p style={{textAlign:"center",padding:"30px 0px "}}>Need Account? 
            <Link to ={"/register"} style={{color:"rgba(9,15,121,1)", textDecoration:"none",fontWeight:"bold"}}>
             Sign Up    
               </Link>
                  </p>
        </div>
        <div  className='shake'>
            <img style={{height:"100%",width:"100%"}} src={ShakeImage} alt="" />
        </div>
    </div> 

    </>
  )
}

export default Signin