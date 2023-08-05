import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { useState } from 'react'
import Login from "./app/pages/Auth/Login";
import { Home } from "./app/pages/Home/Home";
import RouteLayout from "./app/pages/Route/RouteLayout";
import ErrorPage from "./app/pages/ErrorPage/ErrorPage";
import Register from "./app/pages/Auth/Register";
import HomeDetail from "./app/pages/Home/HomeDetail";
import CartPage from "./app/pages/Home/CartPage";

const App = () => {
  // const auth = useAppSelector((state) => state.loaderReducer)
  // const { isLoader } = useActions();
  const [isLogin, setIsLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouteLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/:productDetail', element: <HomeDetail /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> }
      ]
    },

  ]);
  return <RouterProvider router={router} />
}

export default App