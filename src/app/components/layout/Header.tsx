import { Link, useNavigate } from "react-router-dom"
import { useActions, useAppSelector } from "../../hooks/useActions"
import React, { useEffect } from 'react'

const Header = (): JSX.Element => {
  const cartItems = useAppSelector((state) => state.cartReducer.cart)
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const { logout } = useActions()

  const logoutHandler = () => {
    logout()
    navigate("/login")
  }




  return (
    <header className="fixed top-0 left-0 w-full shadow-sm bg-white text-black py-4 px-6">
      <nav className="flex items-center justify-between">
        {/* Before Home page */}
        <div>
          <Link to={'/login'} className="px-2">Login</Link>
          <div>
            <Link to={'/'} className="px-2">Home</Link>
            {/* <Link to={''} className="px-2">Favorite-Product</Link> */}
            <Link to={'/cart'} className="px-2 ">Cart <strong className="bg-orange-500 text-white p-2 rounded-xl "> {cartItems.length} </strong></Link>
            <button onClick={logoutHandler} className="px-2">Logout</button>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header