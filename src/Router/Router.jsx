import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";


const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/donation.json')
        
            
        },
        {
            path:'/donation',
            element:<Donation></Donation>
        },
        {
            path:'/donationDetails/:id',
            element:<DonationDetails></DonationDetails>,
            loader:()=>fetch('/donation.json')
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>,
            loader:()=>fetch('/donation.json')
        }
        ]
    }
])

export default router