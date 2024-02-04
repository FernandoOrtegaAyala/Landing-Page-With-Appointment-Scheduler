import Image from "next/image";

import HamburgerButton from "@/components/HamburgerButton";
import { ThemeButton } from "@/components/ThemeButton";

export default function NavbarComponent() {
  return (
    <>
      <nav className="fixed top-0 z-[100] bg-background w-full px-3 py-1 h-16 lg:px-8 flex justify-between items-center">
        <div className="flex">
          <Image
            className="w-14"
            src="/Logo.png"
            alt="Logo del proyecto"
            width={1000}
            height={1000}
          />
          <h1 className="flex items-center ml-2 font-bold text-2xl">Demo</h1>
        </div>
        <div className="flex items-center justify-center gap-3">
          <ThemeButton />
          <HamburgerButton />
        </div>
      </nav>
    </>
  );
}
