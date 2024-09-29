<<<<<<< HEAD
import Link from "next/link";
import { PencilIcon, PhoneIcon } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import NewTaskButton from "@/components/NewTaskButton";

import data from "./prueba.json";

export default async function HomePage() {
  return (
    <>
      <div className="bg-card pt-20 h-auto w-full ">
        <Header />
        {data.reservaciones.map((reservacion) => (
          <div className="pb-10 px-6" key={reservacion.id}>
            <div className="bg-fondoTarjeta h-auto flex flex-col gap-2 p-4 rounded-md border border-input relative md:mx-32 lg:mx-80 lg:px-10 lg:py-10">
              <div className="absolute top-4 lg:top-10 right-3 lg:right-10 flex gap-3 lg:gap-6">
                <Link
                  href={`editar/${reservacion.id}`}
                  className="w-5 h-5 lg:w-7 lg:h-7">
                  <PencilIcon className="w-full h-full"></PencilIcon>
                </Link>
                <Checkbox
                  // checked={}
                  // onCheckedChange={}
                  className="w-5 h-5 lg:w-7 lg:h-7"
                />
              </div>
              <div className="flex gap-2">
                <span className="text-base lg:text-xl text-sky-600">
                  {reservacion.fecha}
                </span>
                <span className="text-base lg:text-xl text-sky-600">
                  {reservacion.hora}
                </span>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <span className="text-xl lg:text-4xl font-semibold ">
                  {reservacion.nombre}
                </span>
                <div className="flex gap-2 items-center">
                  <PhoneIcon className="w-4 h-4" />
                  <span className="text-lg lg:text-2xl font-medium ">
                    {reservacion.numeroTelefono}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm lg:text-lg text-center">
                Maquinaria solicitada
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-base lg:text-xl font-medium ">
                  Tipo de Bomba:{" "}
                  <span className="text-textoMaquinaria">
                    {reservacion.tipoBomba}
                  </span>
                </span>
                <span className="text-base lg:text-xl font-medium ">
                  Metros por colar:{" "}
                  <span className="text-textoMaquinaria">
                    {reservacion.metrosPorColar}
                  </span>
                </span>
                <span className="text-base lg:text-xl font-medium ">
                  Tiempo estimado:{" "}
                  <span className="text-textoMaquinaria">
                    {reservacion.tiempoEstimado}
                  </span>
                </span>
                <span className="text-base lg:text-xl font-medium ">
                  Requiere que le envíemos concreto:{" "}
                  <span className="text-textoMaquinaria">
                    {reservacion.requiereConcreto}
                  </span>
                </span>
                <span className="text-base lg:text-xl font-medium ">
                  Metros de concreto necesarios:{" "}
                  <span className="text-textoMaquinaria">
                    {reservacion.metrosRequeridos}
                  </span>
                </span>
                <span className="text-base lg:text-xl font-medium ">
                  Tipo de resistencia:{" "}
                  <span className="text-textoMaquinaria">
                    {reservacion.tipoResistencia}
                  </span>
                </span>
                <span className="text-base lg:text-xl font-medium ">
                  Elemento a colar:{" "}
                  <span className="text-textoMaquinaria">
                    {reservacion.elementoAColar}
                  </span>
                </span>
              </div>
              <p className="mt-4  text-sm lg:text-lg text-center">Dirección</p>
              {reservacion.fraccionamiento && (
                <div>
                  <div className="flex justify-between">
                    <div className="flex flex-col lg:text-xl">
                      <span className="text-textoMaquinaria">
                        Fraccionamiento
                      </span>
                      <span className="font-medium">
                        {reservacion.fraccionamiento}
                      </span>
                    </div>
                    <div className="flex flex-col mr-10 lg:text-xl">
                      <span className="text-textoMaquinaria w-16">Lote</span>
                      <span className="font-medium">{reservacion.Lote}</span>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-between lg:text-xl">
                <div className="flex flex-col">
                  <span className="text-textoMaquinaria ">Calle</span>
                  <span className="font-medium">{reservacion.calle}</span>
                </div>
                <div className="flex flex-col mr-10">
                  <span className="text-textoMaquinaria w-16">Exterior</span>
                  <span className="font-medium">{reservacion.calleNumero}</span>
                </div>
              </div>
              <div className="flex flex-col lg:text-xl">
                <span className="text-textoMaquinaria w-16">Colonia</span>
                <span className="font-medium">{reservacion.colonia}</span>
              </div>
              <div className="flex justify-between lg:text-xl">
                <div className="flex flex-col">
                  <span className="text-textoMaquinaria ">
                    Municipio o delegación
                  </span>
                  <span className="font-medium">{reservacion.municipio}</span>
                </div>
                <div className="flex flex-col mr-1.5">
                  <span className="text-textoMaquinaria ">Código postal</span>
                  <span className="font-medium">
                    {reservacion.codigoPostal}
                  </span>
                </div>
              </div>
              {reservacion.informacionAdicional && (
                <div className="flex flex-col gap-2">
                  <p className="mt-4 text-sm lg:text-base text-center">
                    Información adicional
                  </p>
                  <span className="font-medium lg:text-xl">
                    {reservacion.informacionAdicional}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
        <NewTaskButton />
=======
import FooterComponente from "@/components/FooterComponente";
import HeroComponent from "@/components/HeroComponent";
import Highlights from "@/components/Highlights";
import MaquinaCard from "@/components/MaquinaCard";
import NavbarComponent from "@/components/NavbarComponent";
import NuestroServicio from "@/components/NuestroServicio";

export default function HomePage() {
  return (
    <>
      <div className="bg-background h-screen w-full">
        <NavbarComponent />
        <HeroComponent />
        <Highlights />
        <div className="bg-background w-full px-6 h-auto">
          <h2 className="text-current font-black text-3xl text-center py-6">
            Maquinaria
          </h2>
          <MaquinaCard />
        </div>
        <NuestroServicio />
        <FooterComponente />
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
      </div>
    </>
  );
}
