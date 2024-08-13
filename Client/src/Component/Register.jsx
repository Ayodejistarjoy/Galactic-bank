// import React from 'react'
import { Link } from 'react-router-dom'
import Nice from  '../assets/Image/nice.jpg'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import * as Yup from 'yup';




const Register = () => {
    const Navigate = useNavigate();
    let url = "http://localhost:8200/register";

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            password: '',
            email: '',
            phone: '',

        },
        validationSchema: Yup.object({
            firstname: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastname: Yup.string()
              .max(20, 'Must be 15 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
             password: Yup.string().min(6, 'Must be 6 characters or more').matches(/[A-Z]/, 'Must contain one uppercase character').required('Required'),
             
          }),
        onSubmit: (values) => {
        
        console.log(values);
        axios
        .post(url, values)
        .then((res) => {
            toast.success("successfully registered", {
                position: "top-center",
            })
            
            Navigate("/login");
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
        },
      });
  return (
    <>
     <div className='Bigflex'>
     <div className='shake'>
        <img style={{height:"100%",width:"100%"}} src={Nice} alt="" />

        </div>
    
        <div style={{padding:"20px"}}>
        <form className="form" onSubmit={formik.handleSubmit}>
    <span className="title" style={{color:"rgba(9,15,121,1)", textDecoration:"none",fontWeight:"bold"}}>Register</span>
    <label  className="label">FirstName</label>
    <input type="text"
     id="firstname"
      name="firstname"
        className="input"
        onChange={formik.handleChange}
        value={formik.values.firstname}
        onBlur={formik.handleBlur}
        />
         {formik.touched.firstname && formik.errors.firstname ? (
            <div style={{color:"red"}}>{formik.errors.firstname}
            </div>) :null}

    <label  className="label">LastName</label>
    <input type="text"
     id="lastname"
      name="lastname"
       className="input"
       onChange={formik.handleChange}
       value={formik.values.lastname}
       onBlur={formik.handleBlur}
       />
        {formik.touched.lastname && formik.errors.lastname ? (
            <div style={{color:"red"}}>{formik.errors.lastname}
            </div>) :null}
    <label  className="label">Email</label>
    <input type="email"
     id="email"
      name="email"
        className="input"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        />
         {formik.touched.email && formik.errors.email ? (
            <div style={{color:"red"}}>{formik.errors.email}
            </div>) :null}
            <label  className="label">Phone Number</label>
    <input type="number"
     id="phone"
      name="phone"
        className="input"
        onChange={formik.handleChange}
        value={formik.values.phone}
        onBlur={formik.handleBlur}
        />
         {formik.touched.phone && formik.errors.phone ? (
            <div style={{color:"red"}}>{formik.errors.phone}
            </div>) :null}
        
    <label  className="label">Password</label>
    <input type="password"
     id="password"
      name="password"
        className="input"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        />
         {formik.touched.password && formik.errors.password ? (
            <div style={{color:"red"}}>{formik.errors.password}
            </div>) :null}
    <button type="submit" className="submit">Register</button>
    <p style={{textAlign:"center",padding:"30px 0px "}}>Already have Account ?  <Link to ={"/login"} style={{color:"rgba(9,15,121,1)", textDecoration:"none",fontWeight:"bold"}}>
              Log In  </Link>
                 </p>

                 <div className='weed'> 
                <label style={{}} htmlFor="">
                <Link to ={"/"} style={{color:"rgba(9,15,121,1)", textDecoration:"none",fontWeight:"bold"}}>
              Home  </Link>
                </label>
                <label style={{color:" rgba(9,15,121,1)"}} htmlFor="">
                <Link to ={"/contact"} style={{color:"rgba(9,15,121,1)", textDecoration:"none",fontWeight:"bold"}}>
               Need Help?  </Link>

                </label>
                 </div> 
  </form>
        </div>
     
     </div>
    </>
  )
}

export default Register