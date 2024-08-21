import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/signUp';
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
import CartPage from './pages/creativePage/components/cart';
import DGallery from './pages/dashboard/pages/dGallery';
import Orders from './pages/dashboard/pages/orders';
import AddProductPage from './pages/dashboard/pages/addProductPage';
import AddGallery from './pages/dashboard/pages/addGallery';
import AddEvent from './pages/dashboard/pages/addEvent';
import AboutUs from './pages/landing/components/aboutUs';
import { useState } from 'react';
import SubscriptionPage from './pages/landing/components/subscriptionPage';
import Checkout from './pages/creativePage/components/checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/company",
      element: <Company />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/add-product",
      element: <AddProductPage />,
    },
    {
      path: "/event",
      element: <Event />,
    },
    {
      path: "/add-event",
      element: <AddEvent />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/invoice",
      element: <Invoice />,
    },
    {
      path: "/receipts",
      element: <Receipt />,
    },
    {
      path: "/creatives",
      element: <Creatives />,
    },
    {
      path: "/creativepage",
      element: <CreativePage cartItemsCount={cartItems.length} />,
    },
    {
      path: "/productspage",
      element: <ProductsPage cartItemsCount={cartItems.length} />,
    },
    {
      path: "/products/:productId",
      element: <ProductDetails addToCart={addToCart} />,
    },
    {
      path: "/allcreatives",
      element: <AllCreatives />,
    },
    {
      path: "/dgallery",
      element: <DGallery />,
    },
    {
      path: "/allevents",
      element: <AllEvents />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/",
      element: <Orders />,
    },
    {
      path: "/cart",
      element: <CartPage cart={cartItems} />,
    },
    {
      path: "/add-gallery",
      element: <AddGallery />,
    },
    {
      path: "/subscription",
      element: <SubscriptionPage />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={true} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="dark" 
      />
    </>
  );
}

export default App;
