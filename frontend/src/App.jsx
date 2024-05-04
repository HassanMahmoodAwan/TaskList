import React, { useState } from "react";
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import RouterLayout from "./RouterLayout.jsx";
import "./App.css";
import {
  Login,
  Dashboard,
  Task,
  AddTask,
  SignUp,
  Firstpage,
  Forget,
  Reset,
} from "./components";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<RouterLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Task" element={<Task />} /> */}
        {/* <Route path="/addTask" element={<AddTask />} /> */}
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/firstpage" element={<Firstpage />} /> */}
        {/* <Route path="/notification" element={<Notification />} /> */}
        <Route path="/forget" element={<Forget />} />
        <Route path="/Reset" element={<Reset />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
