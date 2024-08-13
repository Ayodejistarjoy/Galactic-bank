import '../Styles/home.css'
import { useLocation } from 'react-router-dom';



const Footer = () => {
  const location = useLocation();

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
  <div className="Ten">
        <p className="Done">Copyright © 2024 Galactic. All rights reserved</p>

        </div>

    </>
  )
}

export default Footer