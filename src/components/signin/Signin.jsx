import { Card } from 'react-bootstrap';


const Signin = (props) =>{

   

const onLoginSubmitHandler =  event =>
{
    event.preventDefault();

 props.setIsLogin(true);   
}
    return(
        <>
        <Card className='w-25   m-auto mt-5 border-dark d-flex align-items-center'>
            <h1 className='bg-dark w-100  text-center text-light py-1'>Sign In</h1>
           <form className='w-100 p-3' onSubmit={onLoginSubmitHandler}>
            <input type="email" className='form-control mb-3 border-dark bg-dark text-light' placeholder='Enter your email' />
            <input type="password" className='form-control mb-3 border-dark bg-dark text-light' placeholder='Enter your Password' />
            <button className='btn btn-dark' type='submit'>Sign In</button>
           </form>
        </Card>
        </>
    )
}
export default Signin;