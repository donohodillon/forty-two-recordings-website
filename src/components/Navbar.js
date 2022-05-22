import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [click, setClick] = useState(false);
  

  return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to='/' className='navbar-logo'>
              FORTY TWO RECORDINGS <i class="fa-solid fa-record-vinyl"/>
            </Link>
            <div className="menu-icon" onClick>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
          </div>
        </nav>
      </>
  );
}

export default Navbar;