import React from 'react';
import {NavLink} from "react-router-dom";

function Dashboard(){
    return (
        <div className={"w-[100vw] h-screen bg-slate-100 flex"}>
            {/* Left-Side*/}
            <div className={"w-[22%] h-full bg-white border-r-[.5px] border-slate-200"}>
                <div
                    className={"w-full h-[12%] border-b-[.5px] border-slate-200] " +
                        "text-sky-400 grid place-content-center text-center"}>
                    <h1 className={"text-2xl font-semibold"}>Task Manager List</h1>
                </div>

                <div className={"flex flex-col items-center"}>
                    <div className={"space-y-2 mt-12"}>
                        <h2 className={"text-lg font-semibold"}>Menu</h2>
                        <div className={"w-[200px] h-[250px] bg-slate-100 flex px-8 py-4"}>
                            <NavLink to={"/login"}
                                     className={`text-md font-semibold hover:text-blue-500 hover:underline`}>
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Right-Side */}
            <div className={"w-[78%] h-full bg-slate-100 space-y-16"}>
                {/* Top-Bar */}
                <div className={"w-full h-[12%] bg-white flex items-center justify-between px-12"}>
                    <h1 className={"text-2xl font-bold"}>Dashboard</h1>
                    <div className={"w-[200px] h-[50px] bg-slate-100 rounded"}></div>
                </div>

                {/*  Main Menu */}
                <div className={"w-full h-[400px] flex flex-col items-center"}>
                    <div className={"w-[85%] h-full bg-white rounded border-[1px] border-cyan-400"}>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dashboard;