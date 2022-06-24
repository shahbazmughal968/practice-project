import classes from './AddCourse.module.css'
import { Card } from 'react-bootstrap';

const AddCourse = () =>{

    return(
        <>
        <Card className='w-25   m-auto mt-5 border-dark d-flex align-items-center'>
        <h1 className='bg-dark w-100  text-center text-light py-1'>Add Courses</h1>
        <form className='w-100 p-3'>
            <input type="text" className='form-control mb-3 border-dark bg-dark text-light' placeholder='Course Name' />
            <button className='btn btn-dark '>Submit</button>
           </form>
        </Card>
        </>
    )
}
export default AddCourse;