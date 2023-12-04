import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";

import SubMenu from "./Submenu";

function Sidebar() {

    let isTab = useMediaQuery({ query: "(max-width: 768px)" });
    const [isOpen, setIsOpen] = useState(!isTab);
    const { pathname } = useLocation();
    const Sidebar_animation = isTab ? {
        open: {
            x: 0,
            width: "16rem",
            transition: {
                damping: 40,
            }
        },
        closed: {
            x: -250,
            width: "4rem",
            transition: {
                damping: 40,
                delay: 0.15,
            }
        },
    } : {
        open: {
            width: "16rem",
            transition: {
                damping: 40,
            }
        },
        closed: {
            width: "4rem",
            transition: {
                damping: 40,
            }
        },
    }

    useEffect(() => {
        if (isTab) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }, [isTab])

    useEffect(() => {
        isTab && setIsOpen(false);
    }, [pathname])

    const subMenusList = [
        {
            name: "build",
            icon: RiBuilding3Line,
            menus: ["auth", "app settings", "stroage", "hosting"],
        },
        {
            name: "analytics",
            icon: TbReportAnalytics,
            menus: ["dashboard", "realtime", "events"],
        },
    ];

    return (
        <div>

            <div
                onClick={() => setIsOpen(false)}
                className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${isOpen ? "block" : "hidden"
                    } `}
            ></div>

            <motion.div variants={Sidebar_animation} initial={{ x: isTab ? -250 : 0 }} animate={isOpen ? "open" : "closed"} className='bg-white text-gray shadow-xl z-[999] w-[16rem] max-w[16rem] h-screen overflow-hidden md:relative fixed'>
                <div className='flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3'>
                    <img src="https://img.icons8.com/color/512/firebase.png" alt="" width={45} />
                    <span className='text-xl whitespace-pre'>Fireball</span>
                </div>

                <div className="flex flex-col h-full">
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[70%] max-h=[68%]">
                        <li>
                            <NavLink to={"/manager"} className={"link"}>
                                <AiOutlineAppstore size={23} className="min-w-max"></AiOutlineAppstore>
                                manager
                            </NavLink>
                        </li>

                        {
                            (isOpen || isTab) && (<div className="border-y py-5 border-slate-300">
                                <small className="pl-3 text-slate-500 inline-block mb-2">
                                    Product category
                                </small>

                                {
                                    subMenusList.map((menu) => (
                                        <div key={menu.name} className="flex flex-col gap-1">
                                            <SubMenu data={menu} />
                                        </div>
                                    ))
                                }
                            </div>)
                        }

                        <li>
                            <NavLink to={"/employee"} className={"link"}>
                                <BsPerson size={23} className="min-w-max"></BsPerson>
                                employee
                            </NavLink>
                        </li>
                    </ul>

                    {isOpen && <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
                        <div className="flex items-center justify-between border-y border-slate-300 p-4">
                            <div>
                                <p>Spark</p>
                                <small>No-cost 0/month</small>
                            </div>
                            
                            <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                                Upgrade
                            </p>
                        </div>
                    </div>}
                </div>
                <motion.div animate={
                    isOpen
                        ? {
                            x: 0,
                            y: 0,
                            rotate: 0,
                        } : {
                            x: -10,
                            y: -200,
                            rotate: 180,
                        }
                }
                    transition={{ duration: 0 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className='absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden'>
                    <IoIosArrowBack size={25} />
                </motion.div>

            </motion.div>
            <div className="m-3 md:hidden" onClick={() => setIsOpen(true)}>
                <MdMenu size={25} />
            </div>
        </div>
    )
}

export default Sidebar
