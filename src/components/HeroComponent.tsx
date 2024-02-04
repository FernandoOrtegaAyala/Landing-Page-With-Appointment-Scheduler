import Image from "next/image";
import Link from "next/link";

import NavMobile from "@/components/NavMobile";

export default function HeroComponent() {
  return (
    <>
      <div className="relative w-full h-screen mt-10">
        <Image
          className=""
          layout="fill"
          objectFit="cover"
          alt="Hero imagen"
          sizes="100vw"
          src="/Hero.png"></Image>
        <div className="absolute px-8 bg-black bg-opacity-80 w-full h-screen flex items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center gap-12">
            <h1 className="text-4xl font-black text-white text-center tracking-tighter leading-9">
              Soluciones eficientes para todos sus proyectos de construcción
            </h1>
            <div className="flex flex-col gap-4 ">
              <Link
                href="/agendar"
                className="text-xl font-semibold h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Agendar
              </Link>
              <Link
                href="#maquinaria"
                className="text-xl font-semibold h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Maquinaria
              </Link>
            </div>
          </div>
        </div>
        <NavMobile />
      </div>
    </>
  );
}
