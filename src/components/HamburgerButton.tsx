"use client";

import { useEffect, useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function HamburgerButton() {
  const [click, setClick] = useState(false);

  const navCalendar = document.getElementById("navCalendar");

  function handleClick() {
    setClick((prevclick) => !prevclick);
  }

  useEffect(() => {
    navCalendar?.classList.toggle("hidden");
    navCalendar?.classList.toggle("flex");
  }, [click]);

  return (
    <>
      <button
        onClick={handleClick}
        id="hamburger-button"
        className="relative h-10 w-10 cursor-pointer">
        <HamburgerMenuIcon className="w-full h-full" />
      </button>
    </>
  );
}
