import classes from "./AddCourse.module.css";
import { Card } from "react-bootstrap";
import useInput from "../../hooks/CustomHook";

const AddCourse = (props) => {
  const {
    value: enteredCourse,
    isValid: enteredCourseIsValid,
    hasError: courseInputhasError,
    inputChangeHandler: courseChangeHandler,
    inputBlurHandler: courseBlurHandler,
    reset: resetCourseInput,
  } = useInput((value) => value.trim() !== "");

  const omAddCourseHandler = async (event) => {
    event.preventDefault();
    fetch(
        "https://react-app-7bde4-default-rtdb.firebaseio.com/Courses.json",
        {
          method: "POST",
          headers: { "Content-Type": "application.json" },
          body: JSON.stringify({
            id:props.userId,
            courseName:enteredCourse,
          }),
        }
      );
      resetCourseInput('')
  };
  return (
    <>
      <Card className="w-25   m-auto mt-5 border-dark d-flex align-items-center">
        <h1 className="bg-dark w-100  text-center text-light py-1">
          Add Courses
        </h1>
        <form className="w-100 p-3" onSubmit={omAddCourseHandler}>
          <input
            type="text"
            className="form-control mb-3 border-dark bg-dark text-light"
            placeholder="Course Name"
            value={enteredCourse}
            onChange={courseChangeHandler}
            onBlur={courseBlurHandler}
          />
          {courseInputhasError && <p className="text-danger">Enter a course</p>}
          <button className="btn btn-dark " type="submit">Submit</button>
        </form>
      </Card>
    </>
  );
};
export default AddCourse;
