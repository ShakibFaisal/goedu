import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import SkillDetails from "../pages/SkillDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Error from "../Error/Error";
import Loader from "../components/Loader";
import Reset from "../pages/Reset";
import Course from "../pages/Course";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";





const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
       
        errorElement:<Error></Error>,
        children:[
            {
                index:true,
                loader:()=>fetch('/skills.json'),
                hydrateFallbackElement:<Loader></Loader>,
                
                Component:Home
            },{
                path:'/profile',
                element:<PrivetRoute><Profile></Profile></PrivetRoute>
               

            },{
                path:'/login',
                Component:Login
            },{
                path:'/register',
                Component:Register
            },{
                path:'/skilldetail/:id',
                loader:()=>fetch('/skills.json'),
                hydrateFallbackElement:<Loader></Loader>,
                element:<SkillDetails></SkillDetails> 
                
            },{
                path:'/reset',
                Component:Reset
            },{
                path:'/courses',
                 loader:()=>fetch('/skills.json'),
                hydrateFallbackElement:<Loader></Loader>,
                Component:Course,
            },{
                path:"/about-us",
                Component:AboutUs
            },{
                path:"/contact",
                Component:ContactUs
            }
        ]
    }
])
export default router