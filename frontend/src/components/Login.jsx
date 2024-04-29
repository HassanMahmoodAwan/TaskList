import React from 'react';
import {NavLink} from "react-router-dom";

function Login(){
    return(
        <div className={"w-[100vw] h-[100vh] bg-white text-slate-900 flex"}>
            {/*==== Left Side ====*/}
            <div className={"w-[45%] h-full bg-cyan-400"}>
            {/* DashBoard Button Link*/}
                <NavLink to={"/"}
                         className={`pl-10 text-xl font-bold hover:text-blue-500 hover:underline`}>Dashboard</NavLink>

            </div>

            {/*==== Right Side ====*/}
            <div className={"w-[55%] h-full bg-white grid place-content-center space-y-2"}>
                <h1 className={"text-2xl font-bold"}>Signup for an Account</h1>
                <div className={"space-y-8"}>
                    <div className={"w-[350px] h-[280px] bg-gray-100"}></div>
                    <button className={"w-[350px] bg-cyan-400 rounded-lg py-2 text-white text-xl font-bold"}>
                        Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Login;