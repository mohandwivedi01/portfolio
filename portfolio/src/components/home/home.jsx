import React from "react";
import { FaFile,  FaWhatsapp, FaChevronDown, FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaReact, FaHtml5, FaJs, FaPython, FaHashtag } from "react-icons/fa";
import {Link} from "react-router"

function Home(){

    return (
        <div className=" h-screen w-full flex justify-center items-center bg-slate-700">
            <div className="grid w-full grid-cols-6 gap-6 bg-red-500 p-6">
                <div className="size-16 bg-yellow-500 border-4 border-white"></div>
                <div className="size-16 bg-yellow-500 border-4 border-white"></div>
                <div className="size-16 bg-yellow-500 border-4 border-white"></div>
                <div className="size-16 bg-yellow-500 border-4 border-white"></div>
                <div className="size-16 bg-yellow-500 border-4 border-white"></div>
                <div className="size-16 bg-yellow-500 border-4 border-white"></div>
                <div className="size-20 bg-yellow-500 border-4 border-white"></div>
                <div className="size-16 bg-yellow-500 border-4 border-white"></div>
                <div className="size-16 bg-yellow-500 border-4 border-white"></div>
                <div className="size-16 bg-yellow-500 border-4 border-white"></div>
                <div className="size-16 bg-yellow-500 border-4 border-white"></div>
                <div className="size-20 bg-yellow-500 border-4 border-white"></div>
            </div>
        </div>
    )
}

export default Home;