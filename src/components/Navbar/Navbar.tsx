import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "react-ionicons";
import { Close } from "react-ionicons";
import scrollToElement from "@/util/scrollToElement";
import useScrollHeight from "@/hooks/useScrollOpacity ";

const Navbar = () => {
  const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);
  const navBarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };
  const scrollHeight = useScrollHeight();

  return (
    <nav
      style={{ backgroundColor: `rgba(45,62,106,${scrollHeight})` }}
      ref={navBarRef}
      className="fixed w-full flex justify-between items-center px-8 z-50 transition-all duration-50"
    >
      <Link to="/" onClick={() => scrollToElement("home")}>
        <img
          src="/images/awa-logo.png"
          className={`${
            !(scrollHeight - 0.2) ? "w-[100px]" : "w-[60px]"
          } duration-300`}
        />
      </Link>
      <div className="hidden lg:flex justify-around text-white text-[18px] ">
        <ul className="flex gap-8 ">
          <li className="list-none  cursor-pointer  ">
            <Link to="/" onClick={() => scrollToElement("home")}>
              Home
            </Link>
          </li>
          <li className="list-none  cursor-pointer">
            <Link to="/" onClick={() => scrollToElement("aboutus")}>
              About Us
            </Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link to="/" onClick={() => scrollToElement("services")}>
              Services
            </Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link to="/" onClick={() => scrollToElement("ChooseUs")}>
              Choose us
            </Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link to="/" onClick={() => scrollToElement("values")}>
              Values
            </Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link to="/" onClick={() => scrollToElement("ourVision")}>
              Our vision
            </Link>
          </li>
          <li
            style={{
              color: `${location.pathname === "/projects" ? "black" : "white"}`,
            }}
            className="list-none cursor-pointer"
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link to="/" onClick={() => scrollToElement("contactus")}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* MOB version*/}
      <div className="flex lg:hidden text-black text-[18px]">
        <div className="cursor-pointer">
          {dropDownMenu ? (
            <Close
              height={"30px"}
              width={"30px"}
              onClick={handleMenu}
              color={"black"}
            />
          ) : (
            <Menu
              height={"30px"}
              width={"30px"}
              onClick={handleMenu}
              color={"black"}
            />
          )}
        </div>
        {dropDownMenu && (
          <ul
            className={`flex flex-col items-center absolute w-[60%] top-[70%] right-0.5 rounded-md bg-[#ffffff80]`}
          >
            <li
              style={{
                color: `${
                  location.pathname === "/projects" ? "black" : "white"
                }`,
              }}
              className="list-none cursor-pointer  p-4"
            >
              <Link to="/" onClick={() => scrollToElement("home")}>
                Home
              </Link>
            </li>
            <li
              style={{
                color: `${
                  location.pathname === "/projects" ? "black" : "white"
                }`,
              }}
              className="list-none cursor-pointer  p-4"
            >
              <Link to="/" onClick={() => scrollToElement("aboutus")}>
                About Us
              </Link>
            </li>
            <li
              style={{
                color: `${
                  location.pathname === "/projects" ? "black" : "white"
                }`,
              }}
              className="list-none cursor-pointer  p-4"
            >
              <Link to="/" onClick={() => scrollToElement("services")}>
                Services
              </Link>
            </li>
            <li
              style={{
                color: `${
                  location.pathname === "/projects" ? "black" : "white"
                }`,
              }}
              className="list-none cursor-pointer  p-4"
            >
              <Link to="/projects">Projects</Link>
            </li>
            <li
              style={{
                color: `${
                  location.pathname === "/projects" ? "black" : "white"
                }`,
              }}
              className="list-none cursor-pointer  p-4"
            >
              <Link to="/" onClick={() => scrollToElement("contactus")}>
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
