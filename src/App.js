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


console.log(isLogin)
  return (
    <>
    <Layout isLogin={isLogin}>
    <Routes>
      <Route index element={<Signin/>}/>
     <Route path='signin' element={ <Signin setIsLogin={setIsLogin}/>}/>  
     <Route path='signup' element={<Signup setIsLogin={setIsLogin}/>} /> 
     <Route path='home' element={<Home/>}/>
     <Route path='add-course' element={<AddCourse/>}/>
     <Route path='green-pass' element={<GreenPass/>}/>
       <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
    </Layout>
    </>
  );
}

export default App;
