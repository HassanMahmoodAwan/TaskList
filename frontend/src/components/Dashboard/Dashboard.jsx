import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Firstpage from "./firstpage";
import Notification from "./notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
// import Task from "../Task/task.jsx";
import Task from "./Task.jsx";

function TaskComponent() {
  return (
    <div className={"w-[100vw] h-screen bg-slate-100 flex"}>
      {/* Left-Side*/}
      <div
        className={"w-[22%] h-full bg-white border-r-[1px] border-slate-200"}
      >
        <div
          className={
            "w-full h-[15%] border-b-[1px] border-slate-200 " +
            "text-sky-400 grid place-content-center text-center"
          }
        >
          <h1 className={"text-2xl font-semibold"}>Task Manager List</h1>
        </div>

        <div className="flex flex-col bg-white">
          <p className="font-bold text-2xl pl-4 mt-3">Menu</p>
          <div className="pl-4 mt-2">
            <Link to="">
              <div className="cursor-pointer hover:bg-gray-50 p-4 pl-4 pr-6 flex items-center shadow-md mb-3">
                <img
                  src="/layout-grid.svg"
                  alt="Image"
                  className="w-7 h-7 rounded-full"
                />
                <p className="ml-2 pl-2 font-bold text-gray-600 transition duration-300 ease-in-out">
                  Dashboard
                </p>
              </div>
            </Link>

            <Link to="/user">
              <div className="cursor-pointer hover:bg-gray-50 rounded-lg p-4 pl-4 pr-6 flex items-center shadow-md mb-3">
                <img
                  src="/user.svg"
                  alt="Image"
                  className="w-7 h-7 rounded-full"
                />
                <p className="ml-2 pl-2 font-bold text-gray-600 transition duration-300 ease-in-out">
                  User
                </p>
              </div>
            </Link>

            <Link to="/Task">
              <div className="cursor-pointer hover:bg-gray-50 rounded-lg p-4 pl-4 pr-6 flex items-center shadow-md mb-3">
                <img
                  src="/task_list.svg"
                  alt="Image"
                  className="w-7 h-7 rounded-full"
                />
                <p className="ml-2 pl-2 font-bold text-gray-600 transition duration-300 ease-in-out">
                  Task
                </p>
              </div>
            </Link>

            <Link to="/task1">
              <div className="cursor-pointer hover:bg-gray-50 rounded-lg p-4 pl-4 pr-6 flex items-center shadow-md mb-3">
                <img
                  src="/Group.svg"
                  alt="Image"
                  className="w-7 h-7 rounded-full"
                />
                <p className="ml-2 pl-2 font-bold text-gray-600 transition duration-300 ease-in-out">
                  Setting
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/*  Right-Side */}

      <div className="w-[78%] h-full bg-slate-100 ">
        {/* Top-Bar */}
        <div
          className={
            "w-full h-[15%] bg-white flex items-center justify-between px-12 relative"
          }
        >
          <h1 className={"text-2xl font-bold"}>Dashboard</h1>

          <a href="/notification">
            <img
              className="absolute  top-8 right-[17.5rem]"
              src="bell.png"
              alt=""
            />
          </a>

          <div className={"w-[200px] h-[50px]  rounded"}>
            <img src="Profile.png" className=" flex w-10 mt-2 pl-1" alt="" />
            <p className="absolute  top-6 right-[60px]">Muhammad Talha</p>
            <p className="absolute  top-12 right-[114px]">Status 200</p>
            <button className=" absolute top-9 right-[30px] border-none bg-none">
              <FontAwesomeIcon icon={faGreaterThan} />
            </button>
          </div>
        </div>

        {/*  Main Menu */}
        <div className={"w-full h-[85%] flex flex-col"}>
          <Routes>
            {/* <Route path="/" element={<Firstpage />} /> */}
            <Route path="/" element={<Task />} />
            {/* <Route path="/notification" element={<Notification />} /> */}
            {/* <Route path="/" element={<Task />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default TaskComponent;
