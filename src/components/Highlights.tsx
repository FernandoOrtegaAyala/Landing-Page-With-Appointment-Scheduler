import Image from "next/image";

import AgendaSVG from "@/components/SVG/AgendaSVG";
import CalidadSVG from "@/components/SVG/CalidadSVG";
import EquiposSVG from "@/components/SVG/EquiposSVG";

export default function Highlights() {
  return (
    <>
      <div className="bg-fondo w-full h-auto flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col items-center text-center w-full px-10">
          <div className="w-36">
            <EquiposSVG />
          </div>
          <h2 className="text-current font-extrabold text-2xl">
            Variedad de Equipos
          </h2>
          <p className=" pt-2">
            Amplia gama de bombas de concreto, modelos estacionarios y
            telescópicos, para adaptarse a diferentes tipos de proyectos de
            construcción, desde pequeñas obras hasta grandes infraestructuras.
          </p>
        </div>
        <div className="flex flex-col items-center text-center w-full px-10">
          <div className="w-36">
            <AgendaSVG />
          </div>
          <h2 className="text-current font-extrabold text-2xl">
            Flexibilidad de Alquiler
          </h2>
          <p className=" pt-2">
            Opciones de alquiler flexibles que se adaptan a las necesidades y
            duración de cada proyecto, incluyendo alquileres a corto y largo
            plazo, y planes personalizados.
          </p>
        </div>
        <div className="flex flex-col items-center text-center w-full px-10 mb-8">
          <div className="w-36">
            <CalidadSVG />
          </div>
          <h2 className="text-current font-extrabold text-2xl">
            Calidad y Fiabilidad
          </h2>
          <p className=" pt-2">
            Opciones de alquiler flexibles que se adaptan a las necesidades y
            duración de cada proyecto, incluyendo alquileres a corto y largo
            plazo, y planes personalizados.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="relative w-full h-60">
          <Image
            className=""
            layout="fill"
            objectFit="cover"
            alt="Sobre nosotros imagen"
            sizes="100vw"
            src="/About-us.png"></Image>
          <div className="absolute w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
            <h2 className="text-center text-4xl font-bold text-white">
              Nosotros
            </h2>
          </div>
        </div>
        <div className="bg-primary h-auto w-full flex justify-center items-center p-4">
          <p className="text-white font-bold text-xl text-center">
            Proveedor en alquiler de bombas de concreto. Soluciones eficientes y
            confiables para todos sus proyectos de construcción. Con una amplia
            gama de bombas de concreto de alta calidad, garantizamos un servicio
            excepcional adaptado a sus necesidades específicas. Socio ideal para
            asegurar que sus obras se ejecuten sin contratiempos, maximizando la
            productividad y la eficiencia.
          </p>
        </div>
      </div>
    </>
  );
}
