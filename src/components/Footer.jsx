import React from "react";
const year = new Date();
import Facebook from "../assets/icons/Facebook.png";
import Insta from "../assets/icons/Insta.png";
import Twitter from "../assets/icons/Twitter.png";
import Youtube from "../assets/icons/Youtube.png";

function getCurrentYear(year) {
  return year.getFullYear();
}

export default function Footer() {
  return (
    <footer
        className="flex flex-col items-center justify-center gap-5 text py-10 px-20"
    >
      <div className="flex gap-10">
        <img src={Facebook} alt="" />
        <img src={Insta} alt="" />
        <img src={Twitter} alt="" />
        <img src={Youtube} alt="" />
      </div>

      <div 
        className="flex flex-col text-center md:flex-row gap-10 item-center justify-center text-xl text-[#111827] font-bold"
      >
        <p>Conditions of Use</p>
        <p>Provicay & Policy</p>
        <p>Press Room</p>
      </div>
      <div className="text-center">
        <p>© {getCurrentYear(year)} MovieBox by Adriana Eka Prayudha </p>
      </div>
    </footer>
  );
}
