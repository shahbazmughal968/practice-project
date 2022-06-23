import { Card } from 'react-bootstrap';
import classes from './Signin.module.css'

const Signin = () =>{

    return(
        <>
        <Card className='w-25  p-3 m-auto mt-5 border-dark d-flex align-items-center'>
           <form className='w-100 '>
            <input type="text" className='form-control mb-3 border-dark' placeholder='email' />
            <input type="password" className='form-control mb-3 border-dark' placeholder='Password' />
            <button className='btn btn-dark '>Sign In</button>
           </form>
        </Card>
        </>
    )
}
export default Signin;