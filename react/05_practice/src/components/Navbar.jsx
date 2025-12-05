import {useState, useEffect} from 'react';
import './Navbar.css';

function Navbar(){
const [navbtn, setNavbtn] = useState(false)
    return(
        <>
        <div className="container">

        <p className="logo">Thi is my logo</p>
        <nav>
            <button className="togglebtn" onClick={()=>{setNavbtn(!navbtn)}}>{navbtn?"Hide":"Show"}</button>
            <ul className={`navbar ${navbtn ? 'show' : 'hide'}`}>
                <li>Home</li>
                <li>Profile</li>
                <li>About Us</li>
            </ul>
        </nav>
        </div>
        </>
    )

}
export default Navbar