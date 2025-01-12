import React from "react";
import { FaFile,  FaWhatsapp, FaChevronDown, FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaReact, FaHtml5, FaJs, FaPython, FaHashtag } from "react-icons/fa";
import {Link} from "react-router"

function Home(){

    return (
        <div className="text-white">
            <div className=" h-screen w-full">
                {/* header started */}
                <div className="flex flex-wrap py-2  bg-gray-950 ">
                    <div className="flex columns-4 w-20 ml-2 justify-start">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                        <div className="w-4 h-4 mx-4 bg-green-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>              
                    </div>
                    <div className="flex flex-grow justify-center items-center">
                        <div className="flex text-lg font-bold border rounded-md border-zinc-700 w-1/2 justify-center items-center bg-zinc-800">Mohan Dwivedi - Portfolio
                        </div>
                    </div>
                </div>
                {/* header ended */}
                <div className="flex flex-row  h-full">
                    {/* links section started */}
                    <div className="flex flex-col justify-between items-center w-16 ">
                        <div className="flex flex-col justify-around items-center h-1/2">
                            {/* <Link to="/about" className="text-white">About</Link> */}
                            <FaFile size={30} color="gray" />
                            <FaGithub size={30} color="gray" />
                            <FaLinkedin size={30} color="gray" />
                            <FaTwitter size={30} color="gray" />
                            <FaWhatsapp size={30} color="gray" />
                            <FaEnvelope  size={30} color="gray" />
                        </div>
                    </div>
                    {/* links section ended */}

                    {/* explorer section started */}
                    <div className="flex flex-col bg-gray-950 w-72 p-5">
                        <div className="flex flex-col">
                            <label className="label text-md text-gray-500 font-bold">EXPLORER</label>
                        </div>
                        <div className=" flex flex-wrap flex-col my-4">
                            <div className="flex flex-row my-1">
                                <label className="label text-md font-bold"><FaChevronDown size={20} /></label>
                                <label className="label text-md font-bold px-1">PORTFOLIO</label>
                            </div>
                            <div className="flex flex-col my-2 ml-3">
                                <div className="flex flex-row my-1">
                                    <label><FaReact size={22} color="#39cfe3" /></label>
                                    <label className="label text-md  px-1">home.jsx</label>
                                </div>
                                <div className="flex flex-row my-1">
                                    <label><FaHashtag size={22} color="#08eab6" /></label>
                                    <label className="label text-md  px-1">about.css</label>
                                </div>
                                <div className="flex flex-row my-1">
                                    <label><FaHtml5 size={22} color="#ff663d" /></label>
                                    <label className="label text-md  px-1">resume.html</label>
                                </div>
                                <div className="flex flex-row my-1">
                                    <label><FaJs size={22} color="#f6ec3f" /></label>
                                    <label className="label text-md  px-1">projects.js</label>
                                </div>
                                <div className="flex flex-row my-1">
                                    <label><FaPython size={22} color="#66ff15" /></label>
                                    <label className="label text-md  px-1">projects.js</label>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* explorer section ended */}

                    {/* main section started */}
                    <div className="">
                        <div className="bg-slate-950  py-2 px-6 flex flex-row">
                            <label className="flex mx-2"><FaReact size={22} color="#39cfe3" className="mr-1"/>home.jsx</label>
                            <label className="flex mx-2"><FaHashtag size={22} color="#08eab6" className="mr-1"/>about.css</label>
                            <label className="flex mx-2"><FaHtml5 size={22} color="#ff663d" className="mr-1"/>resume.html</label>
                            <label className="flex mx-2"><FaJs size={22} color="#f6ec3f" className="mr-1"/>projects.js</label>
                            <label className="flex mx-2"><FaPython size={22} color="#66ff15" className="mr-1"/>github.py</label>
                        </div>
                    </div>
                    {/* main section ended */} 
                </div>
                <div>hello</div>
            </div>
        </div> 
    )
}

export default Home;