import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Routes/Routes'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={myCreatedRouter} />
    </ThemeProvider>
    <Toaster />
  </StrictMode>,
)
