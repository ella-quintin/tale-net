import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './pages/signUp'
function App() {

  const router= createBrowserRouter([
    {
      path: "/signup",
      element: <SignUp/>,
    
    }, 
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
