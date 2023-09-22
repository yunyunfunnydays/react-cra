import { NavLink } from "react-router-dom";

export default function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="" className="navbar-brand" >Navbar</NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => { return `nav-link ${isActive ? 'active' : ''}`	}}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" style={({ isActive }) => {	
                return{
                  color: isActive ? 'red':''
                }
              }}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/album" className="nav-link" >Album</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
