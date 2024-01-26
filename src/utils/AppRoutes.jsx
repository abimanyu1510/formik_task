import React from "react";
import Dashboard from "../components/Dashboard";
import AddUser from "../components/AddUser";
import EditUser from "../components/EditUser";
import { Navigate } from "react-router-dom";

let AppRoutes =[
    {
        path:'/',
        element:<Dashboard/>,
        exact:true
    },
    {
        path:'/adduser',
        element:<AddUser/>,
        exact:true
    },
    {
        path:'/edituser/:id',
        element:<EditUser/>,
        exact:true
    },
    {
        path:"*",
        element:<Navigate to="/"/>,
        exact:false,
    }

]



export default AppRoutes