"use client";

import { useEffect, useRef, useState } from "react";

import NavMobile from "./NavMobile";

export default function HamburgerButton() {
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [click, setClick] = useState(false);

  const navMobile = document.getElementById("navMobile");

  function handleClick() {
    setClick((prevclick) => !prevclick);
  }

  useEffect(() => {
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle("toggle-btn");
      navMobile?.classList.toggle("hidden");
      navMobile?.classList.toggle("flex");
    }
  }, [click]);

  return (
    <>
      <button
        ref={hamburgerRef}
        onClick={handleClick}
        id="hamburger-button"
        className="relative h-8 w-8 cursor-pointer text-3xl md:hidden">
        <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-primary transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-primary before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-primary after:transition-all after:duration-500 after:content-['']"></div>
      </button>
    </>
  );
}
