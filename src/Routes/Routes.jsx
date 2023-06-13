import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "classes",
        element: <Classes></Classes>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
