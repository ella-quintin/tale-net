import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './pages/signUp'
import Login from './pages/login';
import Sidebar from './components/sidebar';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import Profile from './pages/dashboard/pages/profile';
import Company from './pages/dashboard/pages/company';
import Product from './pages/dashboard/pages/product';

function App() {

  const router= createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
    
    }, 
    {
      path: "/signup",
      element: <SignUp/>,
    
    }, 
    {
      path: "/login",
      element: <Login/>,
    
    }, 
    {
      path: "/dashboard",
      element: <Dashboard/>,
    
    }, 
    {
      path: "/profile",
      element: <Profile/>,
    
    }, 
    {
      path: "/company",
      element: <Company/>,
    
    }, 
    {
      path: "/product",
      element: <Product/>,
    
    }, 
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
