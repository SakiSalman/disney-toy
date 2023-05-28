import { createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Toys from "../components/toys/Toys";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import Home from "../pages/Home/Home";
import SingleToyPage from "../pages/SingleToy/SingleToyPage";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import Blog from "../pages/blog/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/toys",
            element: <Toys></Toys>,
            loader : (()=>fetch('http://localhost:5000/'))
        },
        {
            path: "/toys/:id",
            element:<PrivateRoute> <SingleToyPage></SingleToyPage></PrivateRoute>,
            loader : (({params})=>fetch(`http://localhost:5000/toys/${params.id}`))
        },
        {
            path: "/addtoy",
            element:<AddToy></AddToy>
        },
        {
            path: "/mytoys",
            element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,

        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>
        }
        ]
    },{
        path: "*",
        element: <Error></Error>
    },
  ]);
export default router;