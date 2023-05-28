import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Recipe from "../pages/Recipe/Recipe";
import RecipeDetails from "../pages/Recipe/RecipeDetails";
import Chef from "../pages/Chef/Chef";
import ChefDetails from "../pages/Chef/ChefDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivetRoute from "../PrivetRoutes/PrivetRoute";
import LogOutROutes from "../PrivetRoutes/LogOutROutes";
import PageNotFound from "../pages/404/PageNotFound";
import Blog from "../component/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: (
          <LogOutROutes>
            <Login></Login>
          </LogOutROutes>
        ),
      },
      {
        path: "/register",
        element: (
          <LogOutROutes>
            <Register></Register>
          </LogOutROutes>
        ),
      },

      {
        path: "/recipe/:id",
        element: (
          <PrivetRoute>
            <RecipeDetails></RecipeDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/recipe",
        element: <Recipe></Recipe>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivetRoute>
            <ChefDetails></ChefDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/chef",
        element: <Chef></Chef>,
      },
      {
        path: "/404",
        element: <PageNotFound></PageNotFound>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      
      {
        path : '*',
        element : <PageNotFound></PageNotFound>
      }
    ],
  }
  
]);

export default router;
