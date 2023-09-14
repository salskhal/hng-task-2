import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function MobileNav({ isMobileNavOpen, setIsMobileNavOpen }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onClick = (event) => {
    if (event.target.classList.contains("overlay")) {
      setIsMobileNavOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
    }
    setIsMobileNavOpen(false);
    setSearch("");
  };

  return (
    <div
      className="fixed w-full h-screen top-0 left-0 bg-blue-950 bg-opacity-90 z-50 md:hidden overlay"
      onClick={onClick}
    >
      <div className="fixed p-5 top-0 left-0 w-3/4 bg-blue-900 h-full">
        <div>
          <img src={Logo} alt="" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex items-center rounded-md gap-5  px-5 py-2 border-2"
        >
          <input
            type="text"
            className="bg-transparent text-white outline-none 
            w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
      </div>
    </div>
  );
}
