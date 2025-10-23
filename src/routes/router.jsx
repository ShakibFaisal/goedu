import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import SkillDetails from "../pages/SkillDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";





const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                loader:()=>fetch('/skills.json'),
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
                element:<PrivetRoute><SkillDetails></SkillDetails> </PrivetRoute>
                
            }
        ]
    }
])
export default router