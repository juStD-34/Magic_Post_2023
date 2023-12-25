import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { GiTrade } from "react-icons/gi";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        className={`link ${pathname.includes(data.name) && "text-blue-600"}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-3 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu, index) => (
          <li key={menu} className="hover:text-blue-600 hover:font-medium">
              <NavLink
                to={`/${data.name}/${menu}`}
                className="link !bg-transparent capitalize"
              >
                {data.iconList[index]}
                {menu}
              </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;