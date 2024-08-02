import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './pages/signUp'
import Login from './pages/login';
function App() {

  const router= createBrowserRouter([
    {
      path: "/signup",
      element: <SignUp/>,
    
    }, 
    {
      path: "/login",
      element: <Login/>,
    
    }, 
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
