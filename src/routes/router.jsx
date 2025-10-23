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
                element:<PrivetRoute><SkillDetails></SkillDetails> </PrivetRoute>
                
            },{
                path:'/reset',
                Component:Reset
            }
        ]
    }
])
export default router