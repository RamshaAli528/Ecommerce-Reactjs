import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import Review from './Components/Review/Review'
import Privacy from './Components/Privacy/Privacy'
import Terms from './Components/Terms/Terms'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "",
        element:<Home/>
      },
      {
        path: "shop",
        element:<Shop/>
      },
      {
        path: "review",
        element:<Review/>
      },
      {
        path: "privacy",
        element:<Privacy/>
      },
      {
        path: "terms",
        element:<Terms/>
      },
    ]
  }
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
