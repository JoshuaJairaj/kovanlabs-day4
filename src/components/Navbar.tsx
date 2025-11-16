import {BrowserRouter as Router,Routes,Route, Link, NavLink} from "react-router-dom";


function Navbar(){
    return(
        <div>
        <nav className='h-13 shadow-lg py-3 justify-around sticky top-0 bg-transparent fixed w-full bg-white z-50'>
          <div className='flex flex-row justify-around w-135 mx-auto'>
            <NavLink to="/" className={({ isActive }) =>
              `navbar-buttons text-lg font-medium hover:text-blue-500 ${
                isActive ? "text-blue-600 font-semibold " : "text-gray-600"}`
            }>
            Home
            </NavLink>
            <NavLink to="/trending" className={({ isActive }) =>
              `navbar-buttons text-lg font-medium hover:text-blue-500 ${
                isActive ? "text-blue-600 font-semibold bg-linear-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text" : "text-gray-600"}`
            }>
            Trending
            </NavLink>
            <NavLink to="/create" className={({ isActive }) =>
              `navbar-buttons text-lg font-medium hover:text-blue-500 ${
                isActive ? "text-blue-600 font-semibold " : "text-gray-600"}`
            }>
            Create
            </NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              `navbar-buttons text-lg font-medium hover:text-blue-500 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-600"}`
            }>
            About
            </NavLink>
          </div>
        </nav>
        </div>
    )
}

export default Navbar;