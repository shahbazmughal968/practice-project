/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from './Header.module.css'
import { Link } from 'react-router-dom';
const Header =(props)=>{
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/signin'>Sign In</Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link" to='/signup'>Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/add-course'>Add Course</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/green-pass'>Apply Green Pass</Link>
        </li>
        <li className="nav-item float-end">
           <a className="nav-link " role='button'>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Header