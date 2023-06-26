import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./app/pages/Auth/Login";
import { Home } from "./app/pages/Home/Home";
import RouteLayout from "./app/pages/Route/RouteLayout";
import ErrorPage from "./app/pages/ErrorPage/ErrorPage";

const App = () => {
  // const auth = useAppSelector((state) => state.loaderReducer)
  // const { isLoader } = useActions();


  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouteLayout />,
      errorElement:<ErrorPage/>,
      children: [
        { path: '/', element: <Home /> },
        { path: '/auth', element: <Login /> }
      ]
    },

  ]);
  return <RouterProvider router={router} />
}

export default App