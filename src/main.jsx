import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import AuthProvider from './components/Provider/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-screen-xl mx-auto'>
   <AuthProvider> <RouterProvider router={router}></RouterProvider></AuthProvider>
   </div>
  </StrictMode>,
)
