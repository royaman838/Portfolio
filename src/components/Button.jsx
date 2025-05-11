import React from "react";

const Button = ({ children,classname="" }) => {
  return (
    // change the color on hover in section classname
    <section className="grid place-content-center text-black hover:text-white">
      <button className="group flex h-10 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black  hover:pl-2  active:bg-neutral-700">
        <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white ">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45 
            "
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
        <span className={` transition-colors duration-300  ${classname}` }>{children}</span>
      </button>
    </section>
  );
};

export default Button;
