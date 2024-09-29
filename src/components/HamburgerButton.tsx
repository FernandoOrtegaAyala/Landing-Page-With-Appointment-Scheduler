"use client";

<<<<<<< HEAD
import { useEffect, useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function HamburgerButton() {
  const [click, setClick] = useState(false);

  const navCalendar = document.getElementById("navCalendar");
=======
import { useEffect, useRef, useState } from "react";

import NavMobile from "./NavMobile";

export default function HamburgerButton() {
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [click, setClick] = useState(false);

  const navMobile = document.getElementById("navMobile");
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b

  function handleClick() {
    setClick((prevclick) => !prevclick);
  }

  useEffect(() => {
<<<<<<< HEAD
    navCalendar?.classList.toggle("hidden");
    navCalendar?.classList.toggle("flex");
=======
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle("toggle-btn");
      navMobile?.classList.toggle("hidden");
      navMobile?.classList.toggle("flex");
    }
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
  }, [click]);

  return (
    <>
      <button
<<<<<<< HEAD
        onClick={handleClick}
        id="hamburger-button"
        className="relative h-10 w-10 cursor-pointer">
        <HamburgerMenuIcon className="w-full h-full" />
=======
        ref={hamburgerRef}
        onClick={handleClick}
        id="hamburger-button"
        className="relative h-8 w-8 cursor-pointer text-3xl md:hidden">
        <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-primary transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-primary before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-primary after:transition-all after:duration-500 after:content-['']"></div>
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
      </button>
    </>
  );
}
