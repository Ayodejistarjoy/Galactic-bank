
import '../Styles/home.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import Photo from  '../assets/Image/image.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const Navy = () => {
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  }
  if (location.pathname === "/register") {
    return null;
  }
  if (location.pathname === "/dashboard") {
    return null;
  }
  if (location.pathname === "/profile") {
    return null;
  }
  if (location.pathname === "/upload") {
    return null;
  }
  if (location.pathname === "/transfer") {
    return null;
  }
  return (
    <>
     <div className='Ayo'>
    <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid ">
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">
      <img src={Photo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top ms-2"/>
    </a>
    <a className="navbar-brand text-white" href="#">GALACTIC</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item ms-5">
          <a className="nav-link active text-white" aria-current="page" href="#">
          <Link to ={"/"} style={{color:"white", textDecoration:"none"}}>
            Home    
               </Link></a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link active text-white" href="#">
          <Link to ={"/about"} style={{color:"white", textDecoration:"none"}}>
            About    
               </Link></a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link active text-white" href="#"><Link to ={"/contact"} style={{color:"white", textDecoration:"none"}}>
            Contact    
               </Link></a>
        </li>
        <li className="nav-item ms-5">
          <a className="nav-link active text-white" href="#">
            <Link to ={"/feature"} style={{color:"white", textDecoration:"none"}}>
            Features   
               </Link></a>
        </li>
      </ul>
      <form className="d-flex   gap-3">
        <button className="btn btn-outline-none text-white" type="submit">
          <Link to ={"/register"} style={{color:"white", textDecoration:"none"}}>
            Sign Up for Free   
               </Link>
          </button>
        <button className="btn btn-outline-primary bg-primary text-white" type="submit">
          <Link to ={"/login"} style={{color:"white", textDecoration:"none"}}>
            Log In   
               </Link>
          </button>

      </form>
    </div>
  </div>
</nav>

    </div>

    </>
  )
}

export default Navy