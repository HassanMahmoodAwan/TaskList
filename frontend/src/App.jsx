import React, { useState } from 'react'
import {RouterProvider, createRoutesFromElements,createBrowserRouter, Route} from "react-router-dom"
import RouterLayout from "./RouterLayout.jsx";
import './App.css'
import {Login, Dashboard} from "./components"


function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path={"/"} element={<RouterLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="/Login" element={<Login />} />
        </Route>
    ))
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}
export default App
