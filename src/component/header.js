import React from "react";
import { Link } from 'react-router-dom'
import headerImage from '../images/possiblepfp.png'
import '../App.css';

function Header(props) {

    return (


       <div className='container my-3 py-5 text-center'>
            <h1 className="header">BubsnBubsy</h1>
            {/* <Link to="/">  */}
                {/* <img src={headerImage} alt="this is the company logo" className="circular-image"/> */}
            {/* </Link> */}
        </div>

  );
}

export default Header;