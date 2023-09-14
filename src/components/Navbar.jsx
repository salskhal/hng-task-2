import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import MobileNav from "./MobileNav";



import logo from "../assets/Logo.png";
import Menu from "../assets/Menu.png";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [search, setSearch] = useState("");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); 
  const navigate = useNavigate();

  



  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
    }
    setSearch("");
  };

  const handleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };



  return (
    <nav
      className={` px-5 lg:px-20 py-5 flex justify-between items-center fixed top-0 left-0 right-0 transition-colors duration-500 ${
        scrollPosition > 0 ? "bg-red-800" : "bg-transparent"
      }`}
    >
      <Link to="/" className="">
        <img src={logo} alt="Logo" />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="items-center gap-5  px-5 py-2 rounded-md border-2 cursor-pointer hidden md:flex"
      >
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-white outline-none w-96"
        />
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </form>

      <div className="flex items-center gap-3">
        <p className="text-white font-medium">Sign in</p>
        <img src={Menu} alt="Menu" onClick={handleMobileNav} className="cursor-pointer" />
      </div>
      {isMobileNavOpen && <MobileNav isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />}
    </nav>
  );
}
