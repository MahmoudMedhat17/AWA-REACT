import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "react-ionicons";
import { Close } from "react-ionicons";
import scrollToElement from "@/util/scrollToElement";

const Navbar = () => {
  const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);
  const navBarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };

  const handleNavbar = () => {
    if (navBarRef.current) {
      if (window.scrollY > 400) {
        navBarRef.current.style.backgroundColor = "rgb(203, 213, 225,1)";
        // navBarRef.current.style.opacity = "1";
      } else if (window.scrollY > 350) {
        navBarRef.current.style.backgroundColor = "rgb(203, 213, 225,0.8)";
        // navBarRef.current.style.opacity = "0.8";
      } else if (window.scrollY > 300) {
        navBarRef.current.style.backgroundColor = "rgb(203, 213, 225,0.6)";
        // navBarRef.current.style.opacity = "0.6";
      } else if (window.scrollY > 250) {
        navBarRef.current.style.backgroundColor = "rgb(203, 213, 225,0.4)";
        // navBarRef.current.style.opacity = "0.4";
      } else if (window.scrollY > 200) {
        navBarRef.current.style.backgroundColor = "rgb(203, 213, 225,0.2)";
        // navBarRef.current.style.opacity = "0.2";
      } else if (window.scrollY > 150) {
        navBarRef.current.style.backgroundColor = "rgb(203, 213, 225,0)";
        // navBarRef.current.style.opacity = "0";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
  }, []);

  return (
    <nav
      ref={navBarRef}
      className="fixed w-full flex justify-between items-center py-[1rem] px-[2rem] lg:py-[1rem] lg:px-[5rem] z-[99] transition-all duration-300"
    >
      <Link to="/" onClick={() => scrollToElement("home")}>
        <img src="/images/awa-logo.png" className="w-[100px]" />
      </Link>
      {/* WEB version*/}
      <div className="hidden lg:flex justify-around text-white text-[18px] mb-[1rem]">
        <ul className="flex">
          <li
            style={{
              color: `${location.pathname === "/projects" ? "black" : "white"}`,
            }}
            className="list-none mr-[3rem] cursor-pointer"
          >
            <Link to="/" onClick={() => scrollToElement("home")}>
              Home
            </Link>
          </li>
          <li
            style={{
              color: `${location.pathname === "/projects" ? "black" : "white"}`,
            }}
            className="list-none mr-[3rem] cursor-pointer"
          >
            <Link to="/" onClick={() => scrollToElement("aboutus")}>
              About Us
            </Link>
          </li>
          <li
            style={{
              color: `${location.pathname === "/projects" ? "black" : "white"}`,
            }}
            className="list-none mr-[3rem] cursor-pointer"
          >
            <Link to="/" onClick={() => scrollToElement("services")}>
              Services
            </Link>
          </li>
          <li
            style={{
              color: `${location.pathname === "/projects" ? "black" : "white"}`,
            }}
            className="list-none mr-[3rem] cursor-pointer"
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            style={{
              color: `${location.pathname === "/projects" ? "black" : "white"}`,
            }}
            className="list-none mr-[3rem] cursor-pointer"
          >
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
              className="list-none cursor-pointer my-2 p-4"
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
              className="list-none cursor-pointer my-2 p-4"
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
              className="list-none cursor-pointer my-2 p-4"
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
              className="list-none cursor-pointer my-2 p-4"
            >
              <Link to="/projects">Projects</Link>
            </li>
            <li
              style={{
                color: `${
                  location.pathname === "/projects" ? "black" : "white"
                }`,
              }}
              className="list-none cursor-pointer my-2 p-4"
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
