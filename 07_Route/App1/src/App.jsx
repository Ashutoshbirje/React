import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import About from './component/About'
import NavBar from './component/nAVBAR.JSX'
import ParaComp from './component/ParaComp'
import Report from './component/Report'
import Mocktest from './component/Mocktest'
import Course from './component/course'
import PageNotFound from './component/PageNotFound'

const router  = createBrowserRouter(
  [
    {
      path: "/",
      element: <div><NavBar/><Home/></div>
    },
    {
      path: "/About",
      element: <div><NavBar/><About/></div>
    },
    {
      path: "/Dashboard",
      element: <div><NavBar/><Dashboard/></div>,
      children:[
        {
          path: "/Dashboard/courses",
          element: <Course/>
        },
        {
          path: "/Dashboard/mocktest",
          element: <Mocktest/>
        },
        {
          path: "/Dashboard/report",
          element: <Report/>
        }
      ]
    },
    {
      path: "/student/:id",
      element: <div><NavBar/><ParaComp/></div>
    },
    {
      path: "*",
      element: <PageNotFound/>  
    }
  ]
);

function App() {

  return (
    <>
      <div>
       <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
