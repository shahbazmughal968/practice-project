import './App.css';
import {Route,Routes} from 'react-router-dom'
import Signin from '../src/components/signin/Signin'
import Signup from '../src/components/signup/Signup'
import Home from '../src/components/home/Home'
import AddCourse from '../src/components/addCourse/AddCourse'
import GreenPass from '../src/components/greenpass/GreenPass'
import Layout from '../src/layout/Layout';
import {useState} from 'react'
function App() {
const [isLogin,setIsLogin]=useState(false)
const [userId,setUserId]=useState('');
const [greenPassIcon,setGreenPassIcon]=useState(false);
const [matchData,setMatchData]=useState([]);

console.log(isLogin)
  return (
    <>
    <Layout isLogin={isLogin} setLogout={setIsLogin} greenPassIcon={greenPassIcon} setGreenPassIcon={setGreenPassIcon} >
    <Routes>
      <Route index element={<Signin/>}/>
     <Route path='signin' element={ <Signin setIsLogin={setIsLogin} setUserId={setUserId}/>}/>  
     <Route path='signup' element={<Signup setIsLogin={setIsLogin}/>} /> 
     <Route path='home' element={<Home userId={userId} setGreenPassIcon={setGreenPassIcon}/>}/>
     <Route path='add-course' element={<AddCourse userId={userId}/>}/>
     <Route path='green-pass' element={<GreenPass userId={userId} setGreenPassIcon={setGreenPassIcon}/>}/>
       <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
    </Layout>
    </>
  );
}

export default App;
