import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "lucide-react";

import CorreoSVG from "./SVG/CorreoSVG";
import InstagramSVG from "./SVG/InstagramSVG";
import LinkedInSVG from "./SVG/LinkedInSVG";
import ModulzSVG from "./SVG/ModulzSVG";

export default function FooterComponente() {
  return (
    <>
      <div className="w-full h-auto p-6 py-14">
        <div className="flex justify-center">
          <Image
            className="w-28"
            src="/Logo.png"
            alt="Logo del proyecto"
            width={1000}
            height={1000}
          />
        </div>
        <p className="text-current font-semibold text-lg text-center leading-4">
          Garantizamos excelencia de vanguardia con tecnología e innovación
        </p>
        <p className="text-primary font-bold mt-16">Contacto</p>
        <div className="bg-primary w-12 h-0.5 mb-4"></div>
        <div className="flex justify-start items-center gap-2 mb-1">
          <div className="w-4 h-4">
            <CorreoSVG />
          </div>
          <p className="">correomuestra@ejemplo.com</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="w-4 h-4">
            <CorreoSVG />
          </div>
          <p className="">correoejemplo@correo.com</p>
        </div>
        <p className="text-primary font-bold mt-16">Redes sociales</p>
        <div className="bg-primary w-12 h-0.5 mb-4"></div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-start items-center gap-2">
            <div className="w-5 h-5">
              <InstagramSVG />
            </div>
            <p className="">@empresa</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="w-5 h-5">
              <LinkedInSVG />
            </div>
            <p className="">@cuenta</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className="w-5 h-5">
              <ModulzSVG />
            </div>
            <p className="">@ejemplo</p>
          </div>
        </div>
      </div>
      <footer className="text-current flex flex-row justify-center items-center py-2">
        <h6>
          {`<`} Creado por
          <Link
            href="/"
            className="pl-2 underline underline-offset-4 text-primary hover:text-orange-700">
            Fernando Ortega Ayala
          </Link>
          {`  />`}
        </h6>
      </footer>
    </>
  );
}
