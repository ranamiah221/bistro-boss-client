import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendar,
  FaCartShopping,
  FaDailymotion,
  FaItunes,
  FaUser,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="min-w-72 bg-amber-600 min-h-screen">
        <ul className="menu text-xl font-medium text-white p-4">
          <li>
            <NavLink
              to="user"
              className={({ isActive }) => (isActive ? "bg-blue-800" : "")}
            >
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addItem"
              className={({ isActive }) => (isActive ? "bg-blue-800" : "")}
            >
              <FaItunes></FaItunes>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addItem"
              className={({ isActive }) => (isActive ? "bg-blue-800" : "")}
            >
              <FaDailymotion></FaDailymotion>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) => (isActive ? "bg-blue-800" : "")}
            >
              <FaCartShopping />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="allUser"
              className={({ isActive }) => (isActive ? "bg-blue-800" : "")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
              >
                <path
                  d="M17.5 0.454346H2.5C1.90346 0.455001 1.33155 0.692264 0.909733 1.11408C0.487918 1.53589 0.250655 2.10781 0.25 2.70435V8.70435C0.250655 9.30088 0.487918 9.8728 0.909733 10.2946C1.33155 10.7164 1.90346 10.9537 2.5 10.9543H7.43943L9.46975 12.9846C9.53937 13.0543 9.62203 13.1095 9.71301 13.1472C9.80399 13.1849 9.90151 13.2043 10 13.2043C10.0985 13.2043 10.196 13.1849 10.287 13.1472C10.378 13.1095 10.4606 13.0543 10.5303 12.9846L12.5606 10.9543H17.5C18.0965 10.9537 18.6685 10.7164 19.0903 10.2946C19.5121 9.8728 19.7493 9.30088 19.75 8.70435V2.70435C19.7493 2.10781 19.5121 1.53589 19.0903 1.11408C18.6685 0.692264 18.0965 0.455001 17.5 0.454346ZM16 7.95435H4C3.80109 7.95435 3.61032 7.87533 3.46967 7.73468C3.32902 7.59402 3.25 7.40326 3.25 7.20435C3.25 7.00543 3.32902 6.81467 3.46967 6.67402C3.61032 6.53336 3.80109 6.45435 4 6.45435H16C16.1989 6.45435 16.3897 6.53336 16.5303 6.67402C16.671 6.81467 16.75 7.00543 16.75 7.20435C16.75 7.40326 16.671 7.59402 16.5303 7.73468C16.3897 7.87533 16.1989 7.95435 16 7.95435ZM16 4.95435H4C3.80109 4.95435 3.61032 4.87533 3.46967 4.73468C3.32902 4.59402 3.25 4.40326 3.25 4.20435C3.25 4.00543 3.32902 3.81467 3.46967 3.67402C3.61032 3.53336 3.80109 3.45435 4 3.45435H16C16.1989 3.45435 16.3897 3.53336 16.5303 3.67402C16.671 3.81467 16.75 4.00543 16.75 4.20435C16.75 4.40326 16.671 4.59402 16.5303 4.73468C16.3897 4.87533 16.1989 4.95435 16 4.95435Z"
                  fill="black"
                />
              </svg>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="manageBooking"
              className={({ isActive }) => (isActive ? "bg-blue-800" : "")}
            >
              <FaCalendar></FaCalendar>
              My Booking
            </NavLink>
          </li>

          <div className="divider divider-accent"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
