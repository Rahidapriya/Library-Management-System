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
import UpdateBooks from "../pages/updatebooks/UpdateBooks";
import AllBooksByCategory from "../pages/allbooksbycategory/AllBooksByCategory";
import DetailsBook from "../pages/detailbook/DetailsBook";
import PrivateRoute from "./PrivateRoute";
import Read from "../pages/read/Read";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://id-8-serversite.vercel.app/bookcategorycard')
      },
      {
        path: '/addbook',
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path: '/readbook/:id',
        element: <PrivateRoute><Read></Read></PrivateRoute>,
        loader: ({ params }) => fetch(`https://id-8-serversite.vercel.app/books/${params.id}`)
      },
      {
        path: '/allbooks',
        element: <AllBooks></AllBooks>,
        loader: () => fetch('https://id-8-serversite.vercel.app/books')
      },
      {
        path: '/updatebooks/:id',
        element: <PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>,
        loader: ({ params }) => fetch(`https://id-8-serversite.vercel.app/books/${params.id}`)


      },
      {
        path: '/allbooks/:category_name',
        element: <AllBooksByCategory></AllBooksByCategory>,
        loader: ({ params }) => fetch(`https://id-8-serversite.vercel.app/booksbycategory/${params.category_name}`)
      },
      {
        path: '/detailsbook/:id',
        element: <PrivateRoute><DetailsBook></DetailsBook></PrivateRoute>,
        loader: ({ params }) => fetch(`https://id-8-serversite.vercel.app/books/${params.id}`)
      },
      {
        path: '/borrowedbooks',
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
        loader: () => fetch(`https://id-8-serversite.vercel.app/addtoborrow`)
      },
      // {
      //    path:'/borrowedbooks',
      //    element:<BorrowedBooks></BorrowedBooks>
      // },

      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }

    ]
  },

]);
export default router;