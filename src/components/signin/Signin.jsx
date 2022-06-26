import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/CustomHook";

const Signin = (props) => {
  const navigate = useNavigate();

  const {
    value: enteredLoginEmail,
    isValid: enteredLoginEmailIsValid,
    hasError: enteredLoginEmailInputhasError,
    inputChangeHandler: enteredLoginEmailChangeHandler,
    inputBlurHandler: enteredLoginEmailBlurHandler,
    reset: resetenteredLoginEmailInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLoginPassword,
    isValid: enteredLoginPasswordIsValid,
    hasError: enteredLoginPasswordInputhasError,
    inputChangeHandler: enteredLoginPasswordChangeHandler,
    inputBlurHandler: enteredLoginPasswordBlurHandler,
    reset: resetenteredLoginPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const onLoginSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://react-app-7bde4-default-rtdb.firebaseio.com/Users.json"
    );
    const data = await response.json();
    let loadedData = [];
    for(const key in data)
    {
      loadedData.push({
        id:key,
        email:data[key].enteredEmail,
        password:data[key].enteredPassword,
        isAdmin:data[key].isAdmin,
      })
    }
   
    const matchUser = loadedData.filter((user)=>user.email === enteredLoginEmail && user.password === enteredLoginPassword);
    if(matchUser.length === 0)
    {
      alert("Enter a valid email and password")
    }
    else{
      if(matchUser[0].isAdmin === 'on')
      {
        alert('Admin')
      }
      else{

        navigate('../home',{replace:true});
        props.setUserId(matchUser[0].id)
        props.setIsLogin(true)
      }
    }
  };
 
  return (
    <>
      <Card className="w-25   m-auto mt-5 border-dark d-flex align-items-center">
        <h1 className="bg-dark w-100  text-center text-light py-1">Sign In</h1>
        <form className="w-100 p-3" onSubmit={onLoginSubmitHandler}>
          <input
            type="email"
            className="form-control mb-3 border-dark bg-dark text-light"
            placeholder="Enter your email"
            value={enteredLoginEmail}
            onChange={enteredLoginEmailChangeHandler}
            onBlur={enteredLoginEmailBlurHandler}
          />
        {enteredLoginEmailInputhasError && <p className="text-danger">Enter a valid Email</p>}
        <input
            type="password"
            className="form-control mb-3 border-dark bg-dark text-light"
            placeholder="Enter your Password"
            value={enteredLoginPassword}
            onChange={enteredLoginPasswordChangeHandler}
            onBlur={enteredLoginPasswordBlurHandler}
          />
           {enteredLoginPasswordInputhasError && <p className="text-danger">Enter a valid Password</p>}
          <button className="btn btn-dark" type="submit">
            Sign In
          </button>
        </form>
      </Card>
    </>
  );
};
export default Signin;
