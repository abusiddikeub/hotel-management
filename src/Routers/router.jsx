import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Room from "../pages/Dashboard/Room/Room";
import Login from "../pages/Login/Login";
import Main from "../components/Main";
import Home from "../components/Home";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Room106 from "../pages/Dashboard/Room106/Room106";
// import RoomList from "../pages/Dashboard/RoomList/RoomList";
import CheckOUt from "../pages/Dashboard/CheckOut/CheckOUt";
import CheckIn from "../pages/Dashboard/CheckIn/CheckIn";
import AddRoom from "../pages/Dashboard/AddRoom/AddRoom";
import Food from "../pages/Dashboard/Food/Food";
import FoodList from "../pages/Dashboard/FoodList/FoodList";
import About from "../pages/About/About";
import RoomList from "../pages/Dashboard/RoomList/RoomList";
import RoomDetails101 from "../shared/RoomDetails-101/RoomDetails101";
import RoomDetails102 from "../shared/RoomDetails-102/RoomDetails102";
import CheckOutPage from "../pages/Dashboard/CheckIn/CheckOutPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'dashboardHome',
        element:<DashboardHome></DashboardHome>
      },
    
      {
        path: "Room",
        element: <Room></Room>,
      },
      {
        path:'food',
        element:<Food></Food>
      },
      {
        path:'foodList',
        element:<FoodList></FoodList>
      },
      {
        path:'roomList',
        element:<RoomList></RoomList>
      },
      {
        path:'addroom',
        element:<AddRoom></AddRoom>
      },
      {
        path:'checkIn',
        element:<CheckIn></CheckIn>
      },
      {
        path:'checkout',
        element:<CheckOUt></CheckOUt>
      },
      {
        path:'checkoutPage',
        element:<CheckOutPage></CheckOutPage>
      },
      {
        path:'room106',
        element:<Room106></Room106>,

      },
      {
        path:'roomDetails101',
        element:<RoomDetails101></RoomDetails101>,

      },
      {
        path:'roomDetails102',
        element:<RoomDetails102></RoomDetails102>,

      },
     
  
   
     
    ],
  },
]);

export default router;
