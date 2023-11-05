import {
    createBrowserRouter,
  
  } from "react-router-dom";




import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/errorpage/ErrorPage";
import AddBook from "../pages/addbook/AddBook";
import AllBooks from "../pages/allbooks/AllBooks";
import BorrowedBooks from "../pages/borrowedbooks/BorrowedBooks";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5005/bookcategorycard')
        },
        {
           path:'/addbook',
           element:<AddBook></AddBook>
        },
        {
           path:'/allbooks',
           element:<AllBooks></AllBooks>,
           loader:()=>fetch('http://localhost:5005/books')
        },
        {
           path:'/borrowedbooks',
           element:<BorrowedBooks></BorrowedBooks>
        },
  
        {
            path:"/login",
            element:<Login></Login>
          },
          {
            path:"/register",
            element:<Register></Register>
          }
       
      ]
    },
   
  ]);
  export default router;