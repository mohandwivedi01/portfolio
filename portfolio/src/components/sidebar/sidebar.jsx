import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar(){

    return (
        <div className=" text-white ">
            <div className="flex flex-wrap py-2 bg-gray-950 ">
                <div className="flex columns-4 w-20 justify-start">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 mx-4 bg-green-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>              
                </div>
                <div className="flex flex-grow justify-center items-center">
                    <div className="flex text-lg font-bold border rounded-md border-zinc-700 w-1/2 justify-center items-center">Mohan Dwivedi - Portfolio

                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col justify-center items-center h-screen w-16">
                    hello1
                </div>
                <div className="flex flex-col justify-center items-center h-screen bg-gray-950 w-72">
                    hello
                </div>
            </div>
        </div>
    )
}

export default Sidebar;