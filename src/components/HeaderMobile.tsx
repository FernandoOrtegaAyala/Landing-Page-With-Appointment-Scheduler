import Link from "next/link";

import RegresarSVG from "@/components/SVG/RegresarSVG";

export default function HeaderMobile() {
  return (
    <>
      <div className="bg-primary h-14 flex justify-between px-2 items-center">
        <Link href="/" className="w-8 h-8">
          <RegresarSVG />
        </Link>
        <h1 className="font-bold text-xl">Agende nuestro servicio</h1>
        <div className="w-8 h-8"></div>
      </div>
    </>
  );
}
