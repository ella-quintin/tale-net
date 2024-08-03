import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './pages/signUp'
import Login from './pages/login';
import Sidebar from './components/sidebar';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
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
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
