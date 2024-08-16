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
import AllCreatives from './pages/allCreatives';
import AllEvents from './pages/allCreatives/components/allEvents';
import Gallery from './pages/creativePage/components/gallery';
import DGallery from './pages/dashboard/pages/dGallery';
import Orders from './pages/dashboard/pages/orders';
import AddProductPage from './pages/dashboard/pages/addProductPage';
import AddGallery from './pages/dashboard/pages/addGallery';
import AddEvent from './pages/dashboard/pages/addEvent';




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
      path: "product",
      element: <Product/>,
    
    }, 
    {
      path: "/add-product",
      element: <AddProductPage/>,
    
    }, 

 
    {
      path: "/event",
      element: <Event/>,
    
    }, 
    {
      path: "/add-event",
      element: <AddEvent/>,
    
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
    {
      path:"/allcreatives",
      element: <AllCreatives />
    }, 
    {
      path:"/dgallery",
      element: <DGallery/>
    }, 
    {
      path:"/allevents",
      element: <AllEvents />
    }, 
    {
      path:"/orders",
      element: <Orders />
    }, 
    {
      path:"/",
      element: <Orders />
    }, 
    
    {
      path:"add-gallery",
      element: <AddGallery/>
    }, 
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
