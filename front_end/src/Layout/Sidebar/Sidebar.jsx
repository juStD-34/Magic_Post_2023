import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { IoIosArrowBack } from "react-icons/io";
// import { TfiAgenda } from "react-icons/tfi";
// import { TfiCheckBox } from "react-icons/tfi";
import { ImOffice } from "react-icons/im";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";

const CEO = [
  {
    link: "/manager",
    name: "Offices",
    icon: ImOffice,
  }
]

// const Employee = [
//   {
//     link : "/employee/create",
//     name : "Create",
//     icon : TfiAgenda,
//   },
//   {
//     link : "/employee/confirm",
//     name : "Confirm",
//     icon : TfiCheckBox,
//   },
// ]

function Sidebar() {
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(!isTab);
  const { pathname } = useLocation();
  const Sidebar_animation = isTab
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: "4rem",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  useEffect(() => {
    if (isTab) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isTab]);

  useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // const substitute = [
  //   {
  //     name: "Tạo đơn",
  //     icon: TfiAgenda,
  //     menus: ["Đến điểm giao dịch", "Đến điểm tập kết"],
  //   },
  //   {
  //     name: "Xác nhận đơn ",
  //     icon: TfiCheckBox,
  //     menus: ["Từ điểm giao dịch", "Từ điểm tập kết"],
  //   },
  // ];
  
  // const res = substitute;

  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0  z-[998] bg-black/50 ${
          isOpen ? "block" : "hidden"
        } `}
      ></div>

      <motion.div
        variants={Sidebar_animation}
        initial={{ x: isTab ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray border-slate-300 border-r z-[999] w-[16rem] max-w[16rem] h-screen overflow-hidden md:relative fixed"
      >
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            alt=""
            width={45}
          />
          <span className="text-xl whitespace-pre">Magic Post</span>
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[70%] max-h=[68%]">
            {CEO.map((menu) => (
              <li>
                <NavLink to={menu.link} className={"link"}>
                  <menu.icon size={23} className="min-w-max"></menu.icon>
                  {menu.name}
                </NavLink>
              </li>
            ))}
            {/* {(isOpen || isTab) && (
              <div className="border-y py-5 border-slate-300">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Works
                </small>

                {res.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )} */}
          </ul>

          {isOpen && (
            <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex items-center justify-between border-y border-slate-300 p-4">
                <div>
                  <p>Spark</p>
                  <small>No-cost 0/month</small>
                </div>

                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 mt-5 md:hidden" onClick={() => setIsOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
}

export default Sidebar;
