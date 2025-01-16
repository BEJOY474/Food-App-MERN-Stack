import React, { useEffect, useState } from "react";
import { LuLogIn } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import Login from "./Login";
import { logoutUser } from "../actions/userActions";
import SecendNavbar from "./SecendNavbar";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const cartstate = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const dispatch = useDispatch();

  // Handle theme toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Apply theme and save to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const loginButton = (
    <button
      className="px-2 py-1 text-xs btn btn-active btn-primary lg:px-4 lg:py-2 lg:text-base"
      style={{ height: "30px", fontSize: "12px" }}
      onClick={() => document.getElementById("my_modal_3").showModal()}
    >
      <LuLogIn size={16} className="lg:hidden" />
      <LuLogIn size={24} className="hidden lg:block" />
      Login
    </button>
  );

  const avatar = (
    <div className="dropdown dropdown-end mr-1">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost rounded-btn text-[14px] sm:text-base"
      >
        {userState.currentUser ? userState.currentUser.payload.user.name : ""}
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-40 sm:w-52 p-2 shadow"
      >
        <li className="mb-1">
          <a href="/order" className="text-[14px] sm:text-base">Order</a>
        </li>
        <li
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          <a className="text-[14px] sm:text-base btn btn-outline btn-primary w-full sm:w-auto">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );

  const themeController = (
    <label className="flex cursor-pointer gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
      <input
        type="checkbox"
        className="toggle theme-controller"
        onChange={handleToggle}
        checked={theme === "dark"} // Bind checkbox state to theme
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );

  return (
    <div>
      <nav  >
        <header style={{ background:"green"}} className="fixed top-0 left-0 z-50 w-full shadow-lg">
          <div className="container h-auto px-4 mx-auto max-w-screen-2xl xl:px-9">
            <div className="navbar bg-base-100 text-cyan-50"  style={{ background:"green"}}>
              <div className="navbar-start">
                <div className="dropdown lg:hidden">
                  <div tabIndex={0} role="button" className="btn btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-slate-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a>Products</a>
                      <ul className="p-2">
                        <li>
                          <a href="/allPizza">Food</a>
                        </li>
                        <li>
                          <a>Vegetable</a>
                        </li>
                        <li>
                          <a>Meat</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>{themeController}</li>
                  </ul>
                </div>
                <a href="/" className="hidden md:block">
                  {/* <img
                    className="rounded-full logo w-[50px]"
                    src="../../public/image/logo.png"
                    alt="logo"
                  /> */}
                  <h3 className="text-lg font-bold text-zinc-50" >KHAMARBAZAR</h3>
                </a>
              </div>

              <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <details>
                      <summary>Products</summary>
                      <ul className="p-2 bg-slate-600">
                        <li>
                          <a href="/allPizza">Food</a>
                        </li>
                        <li>
                          <a>Vegetable</a>
                        </li>
                        <li>
                          <a>Meat</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>{themeController}</li>
                </ul>
              </div>

              <div className="navbar-end">
                <div className="lg:flex">
                  <div className="mr-3 dropdown dropdown-end">
                    <div tabIndex={0} role="button">
                      <div className="indicator top-1.5">
                        <a href="/cart">
                          <FaCartPlus />
                        </a>
                        <span className="badge -top-2 badge-sm indicator-item">
                          {cartstate.cartItems.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {userState.currentUser ? avatar : loginButton}
              </div>
            </div>
          </div>
        </header>
      </nav>
      
      <Login />
      <SecendNavbar />
    </div>
  );
};

export default Navbar;
