import React from "react";
import { FaWhatsapp, FaChevronDown, FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaReact, FaHtml5, FaJs, FaPython, FaHashtag, FaExclamationTriangle,  FaCheckDouble, FaCodeBranch, FaRegTimesCircle, FaBezierCurve, FaDiscord, FaClone, FaJava, FaUser, FaRegUserCircle, FaRegSun } from "react-icons/fa";
import { NavLink } from "react-router";

function Sidebar(){
    const isActive = false;
    return (
        <div className="bg-neutral-800 text-white h-screen w-full flex flex-col ">
            {/* header started */}
            <nav className="bg-gray-950">
                <div className="flex flex-wrap py-2">
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
            </nav>
            {/* header end */}

            {/* main section started */}
            <div className="flex-1 grid grid-cols-[65px_1fr_4fr] ">
                {/* links */}
                <div className="flex flex-col justify-between items-center w-16 ">
                    <div className="flex flex-col justify-around items-center h-1/2">
                        <FaClone size={30} color="gray" />
                        <FaGithub size={30} color="gray" />
                        <FaLinkedin size={30} color="gray" />
                        <FaTwitter size={30} color="gray" />
                        <FaWhatsapp size={30} color="gray" />
                        <FaEnvelope  size={30} color="gray" />
                    </div>
                    <div className="flex flex-col justify-around items-center h-1/6 mb-5">
                        <FaRegUserCircle size={30} color="gray" />
                        <FaRegSun size={30} color="gray" />
                    </div>
                </div>
                {/* explorer */}
                <div className="bg-gray-950 px-4">
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
                                <label><FaJs size={22} color="#f0db4f" /></label>
                                <label className="label text-md  px-1">contact.js</label>
                            </div>
                            <div className="flex flex-row my-1">
                                <label><FaJava size={22} color="#f8553c" /></label>
                                <label className="label text-md  px-1">github.java</label>
                            </div>
                            <div className="flex flex-row my-1">
                                <label><FaPython size={22} color="#66ff15" /></label>
                                <label className="label text-md  px-1">blog.py</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* editor */}
                <div className="">
                    <div className="bg-gray-950 flex flex-row border-t border-neutral-800">
                        <ul className="flex flex-col lg:flex-row  lg:mt-0">
                            <li className="">
                            <NavLink 
                                    to="/"
                                    className={({isActive}) => `px-5 py-[6px] flex items-center gap-2 duration-200 ${isActive ? "bg-neutral-800 border-t border-t-orange-700 border border-neutral-800": "border border-neutral-800"}    hover:text-orange-600`}>
                                    <FaReact size={22} color="#39cfe3" />
                                    <span className="">home.jsx</span>
                                </NavLink>
                            </li>
                            <li className="">
                            <NavLink 
                                    to="/about"
                                    className={({isActive}) => ` px-5 py-[6px] flex items-center gap-2 duration-200 ${isActive ? "bg-neutral-800 border-t border-t-orange-700 border border-neutral-800": "border border-neutral-800"}    hover:text-orange-600`}>
                                    <FaHtml5 size={22} color="#ff663d" />
                                    <span className="">about.html</span>
                                </NavLink>
                            </li>
                            <li className="">
                            <NavLink 
                                    to="/resume"
                                    className={({isActive}) => ` px-5 py-[6px] flex items-center gap-2 duration-200 ${isActive ? "bg-neutral-800 border-t border-t-orange-700 border border-neutral-800": "border border-neutral-800"}    hover:text-orange-600`}>
                                    <FaHashtag size={22} color="#08eab6" />
                                    <span className="">resume.css</span>
                                </NavLink>
                            </li>
                            <li className="">
                            <NavLink 
                                    to="/contact"
                                    className={({isActive}) => ` px-5 py-[6px] flex items-center gap-2 duration-200 ${isActive ? "bg-neutral-800 border-t border-t-orange-700 border border-neutral-800": "border border-neutral-800"}    hover:text-orange-600`}>
                                    <FaJs size={22} color="#f6ec3f" />
                                    <span className="">conatct.js</span>
                                </NavLink>
                            </li>
                            <li className="">
                            <NavLink 
                                    to="/github"
                                    className={({isActive}) => ` px-5 py-[6px] flex items-center gap-2 duration-200 ${isActive ? "bg-neutral-800 border-t border-t-orange-700 border border-neutral-800": "border border-neutral-800"}    hover:text-orange-600`}>
                                    <FaJava size={22} color="#f8553c" />
                                    <span className="">github.java</span>
                                </NavLink>
                            </li>
                            <li className="">
                            <NavLink 
                                    to="/blog"
                                    className={({isActive}) => ` px-5 py-[6px] flex items-center gap-2 duration-200 ${isActive ? "bg-neutral-800 border-t border-t-orange-700 border border-neutral-800": "border border-neutral-800"}    hover:text-orange-600`}>
                                    <FaPython size={22} color="#66ff15" />
                                    <span className="">blog.py</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* main section end */}

            {/* footer started */}
            <footer className="bg-gray-950">
                <div className="flex justify-between border-t border-slate-700 py-1 px-6">
                    <div className="flex flex-row justify-start">
                        <FaCodeBranch size={15} color="gray" className="mt-[3px]"/>
                        <label className=" text-sm mx-2">main</label>
                        <FaRegTimesCircle size={15} color="gray" className="mx-2 mt-[3px]"/>
                        <FaExclamationTriangle size={15} color="gray" className="mt-[3px]"/>
                    </div>
                    <div className="flex  mx-5">
                        <FaBezierCurve size={15} color="gray" className="mt-[1px] m-1"/>
                        <label className="text-sm">Powered by React.js</label>
                        <FaDiscord className="mt-[1px] m-1 ml-4" />
                        <label className="text-sm">Go Live</label>
                        <FaCheckDouble className="mt-[1px] m-1 ml-4" />
                        <label className="text-sm">Prettier</label>
                    </div>
                </div>
            </footer>
            {/* footer end */}

        </div>
    )
}

export default Sidebar;