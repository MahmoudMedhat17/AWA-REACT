import { Link } from "react-router-dom";
import scrollToElement from "@/util/scrollToElement";

const Footer = () => {
  return (
    <div className="bg-[#2D3E6A] text-[#E1E1E1] py-[3rem] flex flex-col justify-center items-center gap-[2rem]">
      {/* Footer contents*/}
      <ul className="flex m-[5px] gap-[1rem] sm:gap-[1.5rem] text-[0.8rem] sm:text-[1.1rem] sm:font-semibold">
        <Link to="/" onClick={() => scrollToElement("home")}>
          <li>Home</li>
        </Link>
        <Link to="/" onClick={() => scrollToElement("aboutus")}>
          <li>About Us</li>
        </Link>
        <Link to="/" onClick={() => scrollToElement("services")}>
          <li>Services</li>
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <li>Projects</li>
        </Link>
        <Link to="/" onClick={() => scrollToElement("contactus")}>
          <li>Contact Us</li>
        </Link>
      </ul>
      {/* FB ICON */}
      <div>
        <Link to="https://www.facebook.com/ipcamea?mibextid=ZbWKwL">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6758 0H1.32421C0.592868 0 0 0.592868 0 1.32421V22.6758C0 23.4071 0.592868 24 1.32421 24H22.6758C23.4071 24 24 23.4071 24 22.6758V1.32421C24 0.592868 23.4071 0 22.6758 0Z"
              fill="#3D5A98"
            />
            <path
              d="M16.5577 23.998V14.7043H19.6765L20.143 11.0825H16.5577V8.77067C16.5577 7.72225 16.8497 7.00641 18.3523 7.00641H20.2707V3.76179C19.3418 3.66498 18.4082 3.61894 17.4743 3.6239C14.7123 3.6239 12.8101 5.30704 12.8101 8.41173V11.0825H9.69125V14.7043H12.8101V23.998H16.5577Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      {/* CopyRigth sec */}
      <div>
        <p className="text-[12px] sm:text-base">
          Copyright © 2024 Developed by{" "}
          <Link to="https://www.teqneia.com" className="font-medium">
            TEQNEIA
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
