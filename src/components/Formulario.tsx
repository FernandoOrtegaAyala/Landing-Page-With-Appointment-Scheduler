"use client";

<<<<<<< HEAD
import { usePathname } from "next/navigation";
=======
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
import { formSchema } from "@/validations/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import Direccion from "./Direccion";
import InformacionContacto from "./InformacionContacto";
import Maquinaria from "./Maquinaria";
import { Input } from "./ui/input";

export type Inputs = z.infer<typeof formSchema>;

export default function Formulario() {
  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      calle: "",
      codigoPostal: "",
      colonia: "",
      esFraccionamiento: undefined,
      fraccionamiento: "",
      hora: undefined,
      informacionAdicional: "",
      lote: "",
      metrosPorColar: "",
      municipioODelegacion: "",
      nombre: "",
      numero: "",
      numeroExterior: "",
      requiereConcreto: undefined,
      tipoBomba: undefined,
      cantidadConcretoNecesario: undefined,
      tipoResistencia: undefined,
      elemento: undefined,
      fecha: undefined,
    },
  });

  function onSubmit(data: Inputs) {
    console.log(data);
  }

<<<<<<< HEAD
  const pathname = usePathname();

  return (
    <Card className="mt-14 border-none rounded-none pt-5 text-white lg:mx-80">
=======
  return (
    <Card className="mt-5 border-none">
      <CardHeader className="pt-2">
        <CardDescription>
          Complete el formulario para agendar el servicio que se adapte a las
          necesidades de su proyecto.{" "}
        </CardDescription>
      </CardHeader>
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
      <CardContent className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <InformacionContacto form={form} />
            <Maquinaria form={form} />
            <Direccion form={form} />
<<<<<<< HEAD
            <Button className="w-full font-bold text-lg text-white bg-fondoBoton">
              {pathname.includes("editar") ? "Guardar cambios" : "Agendar"}
            </Button>
=======
            <Button className="w-full font-bold text-lg">Enviar</Button>
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
