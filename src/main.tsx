import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store/store.ts'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import Login from './app/pages/Auth/Login.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
