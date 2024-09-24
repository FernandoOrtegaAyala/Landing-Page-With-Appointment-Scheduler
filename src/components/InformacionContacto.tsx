"use client";

import { mappedHoras } from "@/validations/formSchema";
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

import { CalendarSelect } from "./CalendarSelect";
import { Inputs } from "./Formulario";

export default function InformacionContacto({
  form,
}: {
  form: UseFormReturn<Inputs>;
}) {
  const horasOpciones = Object.entries(mappedHoras).map(([key, value]) => (
    <SelectItem value={key} key={key}>
      {value}
    </SelectItem>
  ));

  return (
    <>
      <p className="text-center font-semibold">Información de contacto</p>
      <FormField
        control={form.control}
        name="nombre"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
            <FormLabel>Nombre completo</FormLabel>
            <FormControl>
              <Input placeholder="Nombre completo" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="numero"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
            <FormLabel>Número de teléfono</FormLabel>
            <FormControl>
              <Input placeholder="Número de teléfono" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <div className="flex justify-between items-center  pt-1">
        <CalendarSelect form={form} />
        <FormField
          control={form.control}
          name="hora"
          render={({ field }) => (
            <FormItem className="space-y-0 grid gap-2">
              <FormMessage />
              <FormLabel>Hora</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>{horasOpciones}</SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
