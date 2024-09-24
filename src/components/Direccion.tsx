import { mappedEleccion } from "@/validations/formSchema";
import {
  FieldErrors,
  useForm,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Inputs } from "./Formulario";

export default function Direccion({ form }: { form: UseFormReturn<Inputs> }) {
  const esFraccionamientoValor = form.watch("esFraccionamiento");
  const { formState: errors } = useForm();

  const eleccionOpciones = Object.entries(mappedEleccion).map(
    ([key, value]) => (
      <SelectItem value={key} key={key}>
        {value}
      </SelectItem>
    )
  );

  return (
    <>
      <p className="text-center font-semibold">Dirección</p>
      <FormField
        control={form.control}
        name="esFraccionamiento"
        render={({ field }) => (
          <FormItem className="space-y-0 grid gap-2">
            <FormMessage />
            <FormLabel>En un fraccionamiento</FormLabel>
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
      {(form.formState.errors.fraccionamiento ||
        form.formState.errors.lote) && (
        <p className="text-red-800 text-sm text-center">
          {form.formState.errors.fraccionamiento?.message ||
            form.formState.errors.lote?.message}
        </p>
      )}
      {esFraccionamientoValor === "Sí" && (
        <div className="flex justify-between items-center  pt-1">
          <FormField
            control={form.control}
            name="fraccionamiento"
            render={({ field }) => (
              <FormItem className="w-full mr-4">
                <FormLabel>Fraccionamiento</FormLabel>
                <FormControl>
                  <Input placeholder="Fraccionamiento" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lote"
            render={({ field }) => (
              <FormItem className="w-16 shrink-0">
                <FormLabel>Lote</FormLabel>
                <FormControl>
                  <Input placeholder="Lote" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      )}
      <div className="flex justify-between items-center  pt-1">
        <FormField
          control={form.control}
          name="calle"
          render={({ field }) => (
            <FormItem className="w-full mr-4">
              <FormMessage />
              <FormLabel>Calle</FormLabel>
              <FormControl>
                <Input placeholder="Calle" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numeroExterior"
          render={({ field }) => (
            <FormItem className="w-auto">
              <FormMessage />
              <FormLabel>Número exterior</FormLabel>
              <FormControl>
                <Input placeholder="Número exterior" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="colonia"
        render={({ field }) => (
          <FormItem className="w-full mr-4">
            <FormMessage />
            <FormLabel>Colonia</FormLabel>
            <FormControl>
              <Input placeholder="Colonia" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <div className="flex justify-between items-center  pt-1">
        <FormField
          control={form.control}
          name="municipioODelegacion"
          render={({ field }) => (
            <FormItem className="w-full mr-4">
              <FormMessage />
              <FormLabel>Municipio o Delegación</FormLabel>
              <FormControl>
                <Input placeholder="Municipio o Delegación" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="codigoPostal"
          render={({ field }) => (
            <FormItem className="w-auto">
              <FormMessage />
              <FormLabel>Código Postal</FormLabel>
              <FormControl>
                <Input placeholder="Código Postal" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="informacionAdicional"
        render={({ field }) => (
          <FormItem className="w-full mr-4">
            <FormMessage />
            <FormLabel>Información adicional</FormLabel>
            <FormControl>
              <Textarea
                className="resize-none"
                placeholder="Información adicional"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}
