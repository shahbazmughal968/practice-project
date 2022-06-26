import classes from './GreenPass.module.css'
import { Card } from 'react-bootstrap';
import { useState,useEffect } from 'react';

const GreenPass = (props) =>{
    const [username,setUsername]=useState('');
const [btnHide,setBtnHide]=useState(true);
   
  
    const checkGreenPass =async () =>{
        const response =await fetch('https://react-app-7bde4-default-rtdb.firebaseio.com/GreenPass.json');
        const data =await response.json();
        let loadedData = [];
        for(const key in data)
        {
            loadedData.push({
                id:key,
                userId:data[key].id,
                greenPass:data[key].applyGreenPass
            })
        }
        const match=loadedData.filter((user)=>user.userId === props.userId && user.greenPass === 'Applied')
        if(match.length > 0)
        {
            props.setGreenPassIcon(true);
            setBtnHide(false);
        }
    }
    useEffect(()=>{
        checkGreenPass();
    })
    const applyGreenPass =async ()=>{
fetch('https://react-app-7bde4-default-rtdb.firebaseio.com/GreenPass.json',{
    method: "POST",
            headers: { "Content-Type": "application.json" },
            body: JSON.stringify({
                id:props.userId,
              applyGreenPass:'Applied'
            }),
}); 
props.setGreenPassIcon(true);
setBtnHide(false);
console.log('ajhdjks')
    }
    return(
        <>
        <Card className='w-25   m-auto mt-5 border-dark d-flex align-items-center'>
        <h1 className='bg-dark w-100  text-center text-light py-1'>  Apply Green Pass</h1>
           {btnHide && <button className='btn btn-dark w-50 my-3'  onClick={applyGreenPass}>Apply</button>}
           {!btnHide && <p className='fw-bold fs-4 text-warning'>Already Applied for Green Pass</p>}
        </Card>
        </>
    )
}
export default GreenPass;