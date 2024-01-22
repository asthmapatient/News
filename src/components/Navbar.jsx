import React, { useState } from "react";
import { FaBars, FaBell, FaBookmark, FaPen } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [navBtn, setNavBtn] = useState(false);

  function navBtnHandle() {
    setNavBtn((prevNavBtn) => !prevNavBtn);
  }

  console.log(navBtn);
  return (
    <nav>
      <div className="md:m-8 m-4 flex  gap-20 justify-between  items-center">
        <span className="text-3xl text-red-400 ">Brief</span>
        <div className="md:flex md:flex-row flex-col flex-1 hidden  justify-between">
          <ul className=" gap-10 items-center  md:flex">
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Creator</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Subscribe</a>
            </li>
          </ul>
          <ul className="md:flex-row flex flex-col  gap-10 justify-center items-center">
            <li className="flex gap-2 items-center">
              <FaPen />
              <a href="">Write</a>
            </li>
            <li>
              <a href="#">
                <FaBookmark />
              </a>
            </li>
            <li>
              <a href="#">
                <FaBell />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <img className=" w-12" src="/img/nav/Profile Pic.png" alt="" />
              </a>
            </li>
          </ul>
        </div>

        <button onClick={navBtnHandle} className="md:hidden">
          {navBtn ? <IoMdClose /> : <FaBars />}
        </button>
      </div>

      <div className={navBtn ? "" : "hidden"}>
        <ul className=" md:hidden flex-col flex gap-5 bg-slate-600 text-white py-3 items-center">
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">Creator</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
          <li className="items-center flex gap-4 justify-center">
            <FaPen />
            <a href="">Write</a>
            <a href="#">
              <FaBookmark />
            </a>
            <a href="#">
              <FaBell />{" "}
            </a>
          </li>
          <li></li>

          <li>
            <a href="#">
              <img className=" w-12" src="/img/nav/Profile Pic.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
