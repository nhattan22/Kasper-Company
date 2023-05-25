import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div class="flex flex-col justify-center items-center gap-y-[4rem] h-[100vh]">
    <div class="bg-bg-notfound bg-contain bg-no-repeat bg-center min-h-[60rem] w-full md:w-[60%]">
      <h1 class="text-center text-[10rem]">404</h1>
    </div>

    <Link
      to={"/"}
      class="mt-[-20rem] md:mt-[-10rem] px-[2rem] py-[1rem] bg-[#17D0AB] rounded-[0.5rem] text-[#ffffff] hover:bg-[#39ac31] transition-all duration-300 ease-in-out"
    >
      Go to Home
    </Link>
  </div>
);

export default NotFound;
