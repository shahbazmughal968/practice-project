import classes from './GreenPass.module.css'
import { Card } from 'react-bootstrap';

const GreenPass = () =>{

    return(
        <>
        <Card className='w-25   m-auto mt-5 border-dark d-flex align-items-center'>
        <h1 className='bg-dark w-100  text-center text-light py-1'>Apply Green Pass</h1>
            <button className='btn btn-dark w-50 my-3'>Apply</button>
        </Card>
        </>
    )
}
export default GreenPass;