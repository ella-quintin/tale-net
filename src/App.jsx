import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './pages/signUp'
import Login from './pages/login';
import Sidebar from './components/sidebar';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import Profile from './pages/dashboard/pages/profile';
import Company from './pages/dashboard/pages/company';
import Product from './pages/dashboard/pages/product';
import Event from './pages/dashboard/pages/event';
import Invoice from './pages/dashboard/pages/invoice';
import Receipt from './pages/dashboard/pages/receipts';
import Payment from './pages/dashboard/pages/payment';
import CreativePage from './pages/creativePage';
import Creatives from './pages/creativePage/creatives';
import ProductsPage from './pages/creativePage/components/productsPage';
import ProductDetails from './pages/creativePage/components/productDetails';


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
    {
      path: "/event",
      element: <Event/>,
    
    }, 
    {
      path: "/payment",
      element: <Payment/>,
    
    }, 
    {
      path: "/invoice",
      element: <Invoice/>,
    
    }, 
    {
      path: "/receipts",
      element: <Receipt/>,
    
    }, 
    {
      path: "/creatives",
      element: <Creatives/>,
    }, 
    {
      path: "/creativepage",
      element: <CreativePage/>,
    }, 
    {
      path: "/productspage",
      element: <ProductsPage/>,
    }, 
    {
      path:"/products/:productId",
      element: <ProductDetails />
    }, 
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
