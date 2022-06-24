import './App.css';
import {Route,Switch} from 'react-router-dom'
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
    <Switch>
      <Route path='/' exact>
        <Signin/>
      </Route>
      <Route path='/signin'>
        <Signin setIsLogin={setIsLogin}/>
      </Route>
      <Route path='/signup' >
        <Signup setIsLogin={setIsLogin}/>
      </Route>
      <Route path='/home' >
        <Home/>
      </Route>
      <Route path='/add-course' >
        <AddCourse/>
      </Route>
      <Route path='/green-pass' >
        <GreenPass/>
      </Route>
    </Switch>
    </Layout>
    </>
  );
}

export default App;
