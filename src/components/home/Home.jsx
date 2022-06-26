import classes from './Home.module.css'
import { useState } from 'react'

const Home = (props) =>{
    const [matchData,setMatchData]=useState([]);
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
           
        }
    }
const getCourses = async () =>{
    const fetchCources=await fetch('https://react-app-7bde4-default-rtdb.firebaseio.com/Courses.json')
const coursesData=await fetchCources.json();
let loadedData=[];
for(const key in coursesData)
{
    loadedData.push({
        id:key,
        userId:coursesData[key].id,
        course:coursesData[key].courseName
    })
};
const matchData=loadedData.filter((user)=>user.userId === props.userId)
setMatchData(matchData);

}

if(props.userId !== null)
{
    getCourses();
    checkGreenPass();
}
    return(
        <>
        <h1 className='text-center my-4'>Added Courses </h1>
        <ul className='list-unstyled  m-auto'>
            {matchData.map((item)=>(<li key={item.id} className='border border-dark w-25 bg-dark text-light m-auto text-center fs-3 border-2 p-1  rounded-pill
            mb-3'>{item.course}</li>))}
        </ul>
        </>
    )
}
export default Home;