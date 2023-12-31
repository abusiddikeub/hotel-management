import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { FaHome } from "react-icons/fa";
import { SiHotelsdotcom } from "react-icons/si";
import { BiSolidDashboard ,BiAddToQueue} from "react-icons/bi";
import { FiList } from "react-icons/fi";
import { BsFillSendCheckFill } from "react-icons/bs";
import { MdShoppingCartCheckout, } from "react-icons/md";
import { IoFastFoodOutline, } from "react-icons/io5";

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <img src={logo} alt="" />

            <div>
              <h1 className="text-2xl mt-6 font-semibold text-blue-500 text-center">
                Admin || Owner
              </h1>
            </div>
            <div>
              <li>
                <Link to="/">
                  <FaHome></FaHome>Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/DashboardHome">
                  <BiSolidDashboard></BiSolidDashboard>Dashboard
                </Link>
              </li>
            </div>

            <div>
              <h1 className="text-center mt-5 text-green-700 text-2xl">
                Manager
              </h1>
            </div>
            <li>
              <Link to="/">
                <FaHome></FaHome>Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/DashboardHome">
                <BiSolidDashboard className="text-yellow-400"></BiSolidDashboard>Dashboard
              </Link>
            </li>

            <li>
              <Link to="/dashboard/food">
                <SiHotelsdotcom></SiHotelsdotcom>Food
              </Link>
            </li>

            <li>
              <Link to="/dashboard/foodList">
                <FiList className="text-pink-700"></FiList>Food List
              </Link>
            </li>

            <li>
              <Link to="/dashboard/roomList">
                <FiList className="text-pink-700"></FiList>Room List
              </Link>
            </li>

            <li>
               <Link to="/dashboard/addroom">
                <BiAddToQueue className="text-purple-700"></BiAddToQueue>Add Room
              </Link>
            </li>
            <li>
              <Link to="/dashboard/checkIn">
                <BsFillSendCheckFill className="text-green-600"></BsFillSendCheckFill>Check-In
              </Link>
            </li>
            <li>
              <Link to="/dashboard/checkout">
                <MdShoppingCartCheckout className="text-red-800"></MdShoppingCartCheckout>Check-Out
              </Link>
            </li>
            <li>
              <Link to="/dashboard/room106">
                <SiHotelsdotcom></SiHotelsdotcom>Room-106
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
