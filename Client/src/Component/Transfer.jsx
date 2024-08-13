import { Link, useNavigate } from 'react-router-dom'
import '../Styles/home.css'
import { BiTransferAlt } from "react-icons/bi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';


const Transfer = () => {
  const [user, setuser] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    let url = "http://localhost:8200/page_auth"
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        console.log(res.data)
        setuser(res.data.user)
      })
      .catch(err => {
        console.log(err)
        navigate("/login")
      })

  }, [])


  const [receiver, setreceiver] = useState(false)
  const [amount, setamount] = useState(false)
  const [msg, setmsg] = useState("Enter account number")
  const [msg2, setmsg2] = useState("Enter amount")

  const handleReceiver = (e) => {
    let url = "http://localhost:8200/intra-transfer/receiver"
    if (e.target.value.length === 10) {
      axios.post(url, {
        accountNo: e.target.value
      })
        .then((res) => {
          console.log(res.data)
          setmsg(res.data.name)
          setreceiver(res.data.userEmail)
        })
        .catch((err) => {
          console.log(err)
          setmsg("User not found")
          setreceiver(false)
        })
    } else {
      setmsg("Enter valid account number")
    }
  }

  const handleAmount = (e) => {
    let url = "http://localhost:8200/intra-transfer/transac"
    axios.post(url, {
      sender: user.emailInfo.email,
      amount: e.target.value
    })
      .then((res) => {
        console.log(res.data)
        setamount(e.target.value)
        setmsg2(`Total charge: ${res.data.totalCharge.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`)
      })
      .catch((err) => {
        console.log(err)
        setreceiver(false)
        setmsg2("Insufficient balance")
      })
  }

  const handleTransfer = () => {
    let url = "http://localhost:8200/intra-transfer"

    if (receiver && amount) {
      document.getElementById("loader").style.display = "block"
      document.getElementById("buttonText").style.display = "none"
      axios.post(url, {
        sender: user.emailInfo.email,
        receiver: receiver,
        amount
      })
        .then((res) => {
          console.log(res.data);
          toast.success("Transfer successful")
          setTimeout(() => {
            navigate("/dashboard")
          }, 2000);
        })
        .catch((err) => {
          console.log(err)
          document.getElementById("loader").style.display = "none"
          document.getElementById("buttonText").style.display = "block"
          toast.error("An error occured")
        })

    } else {
      toast.error("An error occured")
    }

  }
  return (
    <>
      <div className='Height' style={{ border: "2px solid rgba(9,15,121,1)", width: "100%", height: "100%", padding: "10px", backgroundColor: "rgba(9,15,121,1)", color: "white" }}>
        <div style={{ display: "flex", padding: "20px 0px" }}>
          <div style={{ justifyContent: "flex-start" }}>
            <Link to={"/dashboard"} style={{ color: "white", textDecoration: "none", fontSize: "30px" }}>
              <FaLongArrowAltLeft />
            </Link>
          </div>
          <div style={{ margin: "auto", fontSize: "20px" }}>Send To Bank Account</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>

          <div>
            <li style={{ border: "1px solid gray", height: "60px", width: "60px", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "rgba(9,15,121,1)", color: "white", margin: "20px", fontSize: "30px" }}><BiTransferAlt />
            </li>
            <li style={{}}>New Transfer</li>
          </div>
          <div>
            <li style={{ border: "1px solid gray", height: "60px", width: "60px", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "rgba(9,15,121,1)", color: "white", margin: "20px", fontSize: "30px" }}><BiTransferAlt />
            </li>
            <li style={{}}>New Transfer</li>
          </div>
          <div>
            <li style={{ border: "1px solid gray", height: "60px", width: "60px", alignItems: "center", justifyContent: "center", display: "flex", backgroundColor: "rgba(9,15,121,1)", color: "white", margin: "20px", fontSize: "30px" }}><BiTransferAlt />
            </li>
            <li style={{}}>New Transfer</li>
          </div>
        </div>


        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "30px 0px" }}>

          <div className="input-container">
            <input style={{ color: "white" }} type="search" onChange={handleReceiver} id="input" required="" />
            <label className="label">Account Number</label>
            <div className="underline"></div>
            <div>{msg}</div>
          </div>
          <div className="input-container">
            <input style={{ color: "white" }} type="number" onChange={handleAmount} id="input" required="" />
            <label className="label">Amount</label>
            <div className="underline"></div>
            <div>{msg2}</div>
          </div>


          <button style={{ color: "white", backgroundColor: "green", height: "50px", borderRadius: "10px", border: "none", marginTop: "20px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={handleTransfer}>
            <div className="dot-spinner" id='loader' style={{ display: "none" }}>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
            </div>
            <span id='buttonText'>Send</span>
          </button>
        </div>







      </div>

    </>



  )
}

export default Transfer