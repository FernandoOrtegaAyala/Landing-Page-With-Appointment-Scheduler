"use client";

import { useState } from "react";
import {
  mappedEleccion,
  mappedElemento,
  mappedTipoBomba,
  mappedTipoResistencia,
} from "@/validations/formSchema";
import { InfoIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Inputs } from "./Formulario";

export default function Maquinaria({ form }: { form: UseFormReturn<Inputs> }) {
  const requiereConcretoValor = form.watch("requiereConcreto");
  const [valorMetros, setValorMetros] = useState<number>();
  const [tiempoTotal, setTiempoTotal] = useState(0);

  function handleChange() {
    const nuevoValorMetros = parseInt(form.watch("metrosPorColar"));
    setValorMetros(nuevoValorMetros);
    const TiempoTotal = nuevoValorMetros * 10;
    setTiempoTotal(TiempoTotal);
  }

  const formatearTiempo = (tiempoTotal: number) => {
    if (tiempoTotal > 900) {
      return <span className="text-red-800">Ingrese una cantidad válida</span>;
    } else {
      const horas = Math.floor(tiempoTotal / 60);
      const minutosRestantes = tiempoTotal % 60;
      return (
        <div className="mb-8 mt-2 ">
          <div className="flex  items-center">
            <InfoIcon className="text-primary w-5 h-5" />
            <p className="text-sm ml-2">
              Tardará {horas === 1 ? `${horas} hora y ` : `${horas} horas y `}
              {minutosRestantes} minutos.
            </p>
          </div>
          <p className="text-sm">
            {horas > 5 ? (
              <span className="text-primary">No puede</span>
            ) : (
              "Puede"
            )}{" "}
            programarse para segundo colado
          </p>
        </div>
      );
    }
  };

  const eleccionOpciones = Object.entries(mappedEleccion).map(
    ([key, value]) => (
      <SelectItem value={key} key={key}>
        {value}
      </SelectItem>
    )
  );
  const elementoOpciones = Object.entries(mappedElemento).map(
    ([key, value]) => (
      <SelectItem value={key} key={key}>
        {value}
      </SelectItem>
    )
  );
  const resistenciaOpciones = Object.entries(mappedTipoResistencia).map(
    ([key, value]) => (
      <SelectItem value={key} key={key}>
        {value}
      </SelectItem>
    )
  );
  const tipoBombaOpciones = Object.entries(mappedTipoBomba).map(
    ([key, value]) => (
      <SelectItem value={key} key={key}>
        {value}
      </SelectItem>
    )
  );

  return (
    <>
      <p className="text-center font-semibold">Maquinaria</p>
      <FormField
        control={form.control}
        name="tipoBomba"
        render={({ field }) => (
          <FormItem className="space-y-0 grid gap-2">
            <FormMessage />
            <FormLabel>Tipo de Bomba</FormLabel>
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>{tipoBombaOpciones}</SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="metrosPorColar"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
            <FormLabel>Cantidad de metros a colar</FormLabel>
            <FormControl>
              <Input
                placeholder="Metros a colar"
                {...field}
                onBlur={handleChange}
              />
            </FormControl>
          </FormItem>
        )}
      />
      {valorMetros && (
        <span className="mb-2">{formatearTiempo(tiempoTotal)}</span>
      )}

      <FormField
        control={form.control}
        name="requiereConcreto"
        render={({ field }) => (
          <FormItem className="space-y-0 grid gap-2">
            <FormMessage />
            <FormLabel>Requiere que le envíemos concreto</FormLabel>
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>{eleccionOpciones}</SelectContent>
            </Select>
          </FormItem>
        )}
      />
      {requiereConcretoValor === "Sí" && (
        <FormField
          control={form.control}
          name="cantidadConcretoNecesario"
          render={({ field }) => (
            <FormItem>
              <FormMessage />
              <FormLabel>Metros de concreto necesarios</FormLabel>
              <FormControl>
                <Input placeholder="Metros necesarios" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      )}
      <FormField
        control={form.control}
        name="tipoResistencia"
        render={({ field }) => (
          <FormItem className="space-y-0 grid gap-2">
            <FormMessage />
            <FormLabel>Tipo de resistencia</FormLabel>
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>{resistenciaOpciones}</SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="elemento"
        render={({ field }) => (
          <FormItem className="space-y-0 grid gap-2">
            <FormMessage />
            <FormLabel>Elemento a colar</FormLabel>
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>{elementoOpciones}</SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </>
  );
}
