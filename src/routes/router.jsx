import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Profile from "../pages/Profile";




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
                Component:Profile

            }
        ]
    }
])
export default router