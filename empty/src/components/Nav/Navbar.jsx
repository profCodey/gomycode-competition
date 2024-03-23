import React from "react";

const Navbar = () => {
  return (
    <div style={{ marginTop: "40px", marginLeft: "20px" }}>
      <div className="">
        <div>
          {" "}
          <a href="">
            <h1 className="logo text-red-500 font-extrabold">Recipe Buddies</h1>
          </a>
        </div>
        <nav
          className="flex flex-wrap w-[80%] justify-center items-center  mx-auto"
          style={{ marginTop: "-20px", marginBottom: "20px" }}
        >
          <div className="flex justify-around gap-[8vw]">
            <ul className="flex  items-center gap-[4vw] text-sm">
              <a href="/">
                <li className=" transition-colors ease-in delay-150  hover:text-red-500">
                  Home
                </li>
              </a>
              <a href="/">
                {" "}
                <li className=" transition-colors ease-in delay-150  hover:text-red-500">
                  Recipe
                </li>
              </a>
              <a href="/profile">
                {" "}
                <li className=" transition-colors ease-in delay-150  hover:text-red-500">
                  Profile
                </li>
              </a>
            </ul>
          </div>
          {/* <div className="flex items-center gap-[2vw] ">
            <button className="bg-red-500 text-white rounded-3xl hover:bg-white w-28 h-9 ">
              Profile
            </button>
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
