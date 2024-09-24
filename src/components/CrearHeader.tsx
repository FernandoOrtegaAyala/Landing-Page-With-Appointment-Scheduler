"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function CrearHeader() {
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-0 z-[100] bg-primary w-full px-3 py-1 h-14 flex justify-between items-center shadow-md">
        <Link href="/" className="w-6 h-6">
          <ArrowLeft className="text-white" />
        </Link>
        <h2 className="text-lg font-semibold text-white">
          {pathname.includes("crear")
            ? "Crear reservación"
            : "Editar reservación"}
        </h2>
        <div className="w-6 h-6"></div>
      </div>
    </>
  );
}
