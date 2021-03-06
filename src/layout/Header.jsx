/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import classes from './Header.module.css'
import { Link } from "react-router-dom";
const Header = (props) => {
  const navigate=useNavigate();
  const onLogouthandler = () =>{
 
    navigate('../',{replace:true})
    props.setGreenPassIcon(false)
    props.setLogout(false)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNav"
          >
            <div>
              <ul className="navbar-nav">
               {props.greenPassIcon && <li className={classes.greenPass}></li>}
                <li className="nav-item">
                  {props.isLogin && (
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  {!props.isLogin &&<Link className="nav-link" to="/signin">
                    Sign In
                  </Link>}
                </li>
                <li className="nav-item">
                  {!props.isLogin &&<Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>}
                </li>
                <li className="nav-item">
                  {props.isLogin && (
                    <Link className="nav-link" to="/add-course">
                      Add Course
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  {props.isLogin && (
                    <Link className="nav-link" to="/green-pass">
                      Apply Green Pass
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item ">
                  {props.isLogin && (
                    <a className="nav-link " role="button" onClick={onLogouthandler}>
                      Logout
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
