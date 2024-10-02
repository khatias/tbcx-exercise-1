import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ContactPage from './pages/Contact/ContactPage.jsx'
import AboutPage from './pages/About/AboutPage.jsx'
import AssigmentThree from './pages/assignment3/AssigmentThree.jsx'
import ProfilePage from './pages/Profile/ProfilePage.jsx'
import BlogPage from './pages/Blog/BlogPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "ContactPage",
    element: <ContactPage/>,
  },

  {
    path: "AboutPage",
    element: <AboutPage/>,
  },

  {
    path: "Asigment-3",
    element: <AssigmentThree/>,
  },

  {
    path: "Blog",
    element: <BlogPage/>,
  },

  {
    path: "profile",
    element: <ProfilePage/>,
  },



  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
