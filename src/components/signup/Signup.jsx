import classes from "./Signup.module.css";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import useInput from "../../hooks/CustomHook";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const navigate=useNavigate();
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputhasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputhasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputhasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputhasError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredConfirmPassword,
    isValid: enteredConfirmPasswordIsValid,
    hasError: confirmPasswordInputhasError,
    inputChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPasswordInput,
  } = useInput((value) => value.trim() !== "");
  // useState for signUp value snapshoot start from here

  const [isAdmin, setIsAdmin] = useState("off");
  const [hideToggle, setHidetoggle] = useState(true);
  // useState for signUp value snapshoot end's here
  const hideAdminBtn = async()=>{
    const response =await fetch('https://react-app-7bde4-default-rtdb.firebaseio.com/Users.json');
    const data =await response.json();
    for(const key in data)
    {
    
  if(data[key].isAdmin === 'on')
      {
  setHidetoggle(false)
      }
    }
  };
  useEffect(()=>{
  hideAdminBtn();
  });
  const onFormSubmitHandler = async (event) => {
    event.preventDefault();
    const response =await fetch('https://react-app-7bde4-default-rtdb.firebaseio.com/Users.json');
    const data =await response.json();
    if(data !== null)
    {
      for(const key in data)
      {
        if(enteredEmail === data[key].enteredEmail)
        {
          alert(enteredEmail +' this email already exist')
        }
        else{
          if (
            !enteredFirstNameIsValid ||
            !enteredLastNameIsValid ||
            !enteredEmailIsValid ||
            !enteredPasswordIsValid ||
            !enteredConfirmPasswordIsValid
          ) {
            alert("Please enter the valid values in all input fields");
          } else if (enteredPassword !== enteredConfirmPassword) {
            alert("Please enter the same password");
          } else {
            fetch(
              "https://react-app-7bde4-default-rtdb.firebaseio.com/Users.json",
              {
                method: "POST",
                headers: { "Content-Type": "application.json" },
                body: JSON.stringify({
                  enteredFirstName,
                  enteredLastName,
                  enteredEmail,
                  enteredPassword,
                  isAdmin,
                }),
              }
            );
  
            resetFirstNameInput("");
            resetLastNameInput("");
            resetEmailInput("");
            resetPasswordInput("");
            resetConfirmPasswordInput("");
            navigate('../home',{replace:true})
            props.setIsLogin(true);
          }
        }
      }
    }
    else{
      if (
        !enteredFirstNameIsValid ||
        !enteredLastNameIsValid ||
        !enteredEmailIsValid ||
        !enteredPasswordIsValid ||
        !enteredConfirmPasswordIsValid
      ) {
        alert("Please enter the valid values in all input fields");
      } else if (enteredPassword !== enteredConfirmPassword) {
        alert("Please enter the same password");
      } else {
        fetch(
          "https://react-app-7bde4-default-rtdb.firebaseio.com/Users.json",
          {
            method: "POST",
            headers: { "Content-Type": "application.json" },
            body: JSON.stringify({
              enteredFirstName,
              enteredLastName,
              enteredEmail,
              enteredPassword,
              isAdmin,
            }),
          }
        );

        resetFirstNameInput("");
        resetLastNameInput("");
        resetEmailInput("");
        resetPasswordInput("");
        resetConfirmPasswordInput("");
        navigate('../home',{replace:true})
        props.setIsLogin(true);
      }
    }
       
      }
  return (
    <>
      <Card className="w-25   m-auto mt-5 border-dark d-flex align-items-center">
        <h1 className="bg-dark w-100  text-center text-light py-1">Sign Up</h1>
        <form className="w-100 p-3" onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            className="form-control mb-3 border-dark bg-dark text-light"
            placeholder="First Name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputhasError && (
            <p className="text-danger">Enter a Valid First Name</p>
          )}
          <input
            type="text"
            className="form-control mb-3 border-dark bg-dark text-light"
            placeholder="Last Name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputhasError && (
            <p className="text-danger">Enter a Valid Last Name</p>
          )}

          <input
            type="email"
            className="form-control mb-3 border-dark bg-dark text-light"
            placeholder="Enter your Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputhasError && (
            <p className="text-danger">Enter a Valid Email</p>
          )}
          <input
            type="password"
            className="form-control mb-3 border-dark bg-dark text-light"
            placeholder="Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordInputhasError && (
            <p className="text-danger">Enter a Valid Password</p>
          )}

          <input
            type="password"
            className="form-control mb-3 border-dark bg-dark text-light"
            placeholder="Confirm Password"
            value={enteredConfirmPassword}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
          />
          {confirmPasswordInputhasError && (
            <p className="text-danger">Enter a same Password</p>
          )}

          {hideToggle && (
            <div className="form-check form-switch mb-3">
              <label
                className="form-check-label fw-bold"
                htmlFor="flexSwitchCheckDefault"
              >
                Is Admin
              </label>
              <input
                className="form-check-input border-dark"
                type="checkbox"
                role="switch"
                onChange={(event) => setIsAdmin(event.target.value)}
              />
            </div>
          )}
          <button className="btn btn-dark " type="submit">
            Sign Up
          </button>
        </form>
      </Card>
    </>
  );
};
export default Signup;
