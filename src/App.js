import './App.css';
import {Route,Switch} from 'react-router-dom'
import Signin from '../src/components/signin/Signin'
import Signup from '../src/components/signup/Signup'
import Home from '../src/components/home/Home'
import AddCourse from '../src/components/addCourse/AddCourse'
import GreenPass from '../src/components/greenpass/GreenPass'
import Layout from '../src/layout/Layout';
function App() {
  return (
    <>
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Signin/>
      </Route>
      <Route path='/signin'>
        <Signin/>
      </Route>
      <Route path='/signup' exact>
        <Signup/>
      </Route>
      <Route path='/home' exact>
        <Home/>
      </Route>
      <Route path='/add-course' exact>
        <AddCourse/>
      </Route>
      <Route path='/green-pass' exact>
        <GreenPass/>
      </Route>
    </Switch>
    </Layout>
    </>
  );
}

export default App;
