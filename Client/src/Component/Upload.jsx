import { BsPersonPlusFill } from "react-icons/bs";
// import ShakeImage from  '../assets/Image/shake.jpg'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const Upload = () => {
  let Url = "http://localhost:8200/upload"
    const [file, setFile] = useState("")
    const [Image, setImage] = useState("") 
    const [email, setemail] = useState("")
    // const [user,setUser] = useState("")

    const navigate = useNavigate()

    useEffect(()=>{
      let url = "http://localhost:8200/page_auth";
      let token = localStorage.getItem("token");

      axios
      .get(url, { 
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
      },
    })
    .then((res)=>{
      console.log(res.data);
      if (res.data.status === true) {
        console.log("success");
        setemail(res.data.user.emailInfo.email);
        if (res.data.user.profile_url == "unset") {
          null
        }else{
          setImage(res.data.user.profile_url);
        }
      }
    })
    .catch((err)=>{
      console.log(err);
      if(err){
        localStorage.removeItem("token");
        navigate("/Signin");
      }
    });
    }, []);

    const handlefile = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(reader.result);
            setFile(reader.result)
            setImage(reader.result.image)
        }
         console.log(e.target.files[0]);
    }

    const Uploaded = () => {
      axios.post(Url,{ email, file
       })
          .then((res) => {
              setImage(res.data.result.url)
              console.log(res.data.result.url);
          })
          .catch(err => {
              console.log(err);
      })
  }


  return (
    <div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1 style={{marginTop:"30px"}}>Photo</h1>
       
      </div>

      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      
      <div style={{border:"3px solid gray",borderRadius:"50%",height:"100px",width:"100px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px"}}>
  { Image ? <img  style={{width:"100px",maxWidth:"100%",borderRadius:"50%",height:"100px"}} src={Image} alt="" /> : <li style={{fontSize:"50px"}}><BsPersonPlusFill /></li>  }   
    </div>
        <input onChange={(e) => handlefile(e)}  style={{padding:"10px",marginTop:"30px",border:"none",backgroundColor:"rgba(9,15,121,1)",color:"#fff",borderRadius:"5px",width:"50%"}} type="file" name="file" id="file" />
        <button onClick={Uploaded} style={{padding:"10px",marginTop:"30px",border:"none",backgroundColor:"rgba(9,15,121,1)",color:"#fff",borderRadius:"5px",width:"50%"}}>Upload</button>
        </div>
    </div>
  )
}

export default Upload