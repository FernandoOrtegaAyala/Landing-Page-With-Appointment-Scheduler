import { z } from "zod";

const eleccion = ["Sí", "No"] as const;

export type Eleccion = (typeof eleccion)[number];

export const mappedEleccion: { [key in Eleccion]: string } = {
  Sí: "Sí",
  No: "No",
};

const tipoBomba = [
<<<<<<< HEAD
  "Ninguna",
=======
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
  "Bomba 28",
  "Bomba 32",
  "Bomba estacionaria",
  "Bomba pluma",
] as const;

export type TipoBomba = (typeof tipoBomba)[number];

export const mappedTipoBomba: { [key in TipoBomba]: string } = {
<<<<<<< HEAD
  Ninguna: "Ninguna",
=======
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
  "Bomba 28": "Bomba 28",
  "Bomba 32": "Bomba 32",
  "Bomba estacionaria": "Bomba estacionaria",
  "Bomba pluma": "Bomba pluma",
};

const tipoResistencia = ["200", "250", "300"] as const;

export type TipoResistencia = (typeof tipoResistencia)[number];

export const mappedTipoResistencia: { [key in TipoResistencia]: string } = {
  "200": "200",
  "250": "250",
  "300": "300",
};

const elemento = [
  "Loza",
  "Columnas",
  "Dados",
  "Muro",
  "Zapatas",
  "Piso",
] as const;

export type Elemento = (typeof elemento)[number];

export const mappedElemento: { [key in Elemento]: string } = {
  Loza: "Loza",
  Columnas: "Columnas",
  Dados: "Dados",
  Muro: "Muro",
  Zapatas: "Zapatas",
  Piso: "Piso",
};

const horas = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
] as const;

export type Horas = (typeof horas)[number];

export const mappedHoras: { [key in Horas]: string } = {
  "8:00 AM": "8:00 AM",
  "9:00 AM": "9:00 AM",
  "10:00 AM": "10:00 AM",
  "11:00 AM": "11:00 AM",
  "12:00 PM": "12:00 PM",
  "1:00 PM": "1:00 PM",
  "2:00 PM": "2:00 PM",
  "3:00 PM": "3:00 PM",
  "4:00 PM": "4:00 PM",
  "5:00 PM": "5:00 PM",
  "6:00 PM": "6:00 PM",
};

export const formSchema = z
  .object({
    nombre: z
      .string()
      .min(3, {
        message: "El campo es requerido",
      })
      .max(55, {
        message: "Ingrese máximo 55 caracteres",
      })
      .regex(
<<<<<<< HEAD
        /^[A-Za-z\s]+$/,
=======
        /^[A-Za-z]+$/,
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
        "El campo nombre completo sólo debe contener letras de la A a la Z."
      ),
    numero: z
      .string()
      .min(3, {
        message: "El campo es requerido",
      })
      .max(15, {
        message: "Ingrese máximo 15 caracteres",
      })
      .refine((numero) => !isNaN(parseInt(numero)), {
        message: "El campo sólo acepta números",
      }),
    hora: z.enum(horas, {
      errorMap: () => ({ message: "Seleccione una hora" }),
    }),
    metrosPorColar: z
      .string()
      .min(1, {
        message: "Ingrese una cantidad",
      })
      .max(10, {
        message: "Ingrese máximo 10 caracteres",
      })
      .refine((numero) => !isNaN(parseInt(numero)), {
        message: "El campo sólo acepta números",
      }),
    requiereConcreto: z.enum(eleccion, {
      errorMap: () => ({ message: "Seleccione una opción" }),
    }),
    cantidadConcretoNecesario: z
      .string()
      .optional()
      .refine((numero) => numero === undefined || !isNaN(parseInt(numero)), {
        message: "El campo sólo acepta números",
      }),
    municipioODelegacion: z
      .string()
      .min(3, {
        message: "Ingrese un municipio o delegación",
      })
      .max(45, {
        message: "Ingrese máximo 45 caracteres en municipio o delegación",
      })
      .regex(
<<<<<<< HEAD
        /^[A-Za-z\s]+$/,
=======
        /^[A-Za-z]+$/,
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
        "El campo municipio o delegación sólo debe contener letras de la A a la Z."
      ),
    codigoPostal: z
      .string()
      .min(3, {
        message: "Ingrese un código postal",
      })
      .max(10, {
        message: "Ingrese máximo 10 caracteres en código postal",
      })
      .refine((numero) => !isNaN(parseInt(numero)), {
        message: "El campo sólo acepta números",
      }),
    colonia: z
      .string()
      .min(3, {
        message: "Ingrese una colonia",
      })
      .max(45, {
        message: "Ingrese máximo 45 caracteres",
      })
      .regex(
<<<<<<< HEAD
        /^[A-Za-z\s]+$/,
=======
        /^[A-Za-z]+$/,
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
        "El campo colonia sólo debe contener letras de la A a la Z."
      ),
    calle: z
      .string()
      .min(3, {
        message: "Ingrese una calle",
      })
      .max(50, {
        message: "Ingrese máximo 50 caracteres",
      })
      .regex(
<<<<<<< HEAD
        /^[A-Za-z\s]+$/,
=======
        /^[A-Za-z]+$/,
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
        "El campo calle sólo debe contener letras de la A a la Z."
      ),
    numeroExterior: z
      .string()
      .min(1, {
        message: "Ingrese un número exterior",
      })
      .max(5, {
        message: "Ingrese máximo 5 caracteres en número exterior",
      })
      .refine((numero) => !isNaN(parseInt(numero)), {
        message: "El campo sólo acepta números",
      }),
    informacionAdicional: z
      .string()
      .optional()
      .refine((string) => string === undefined || string.length <= 400, {
        message: "Ingrese máximo 400 caracteres",
      }),
    fraccionamiento: z
      .string()
      .optional()
      .refine((string) => string === undefined || string.length <= 30, {
        message: "Ingrese máximo 30 caracteres en fraccionamiento",
      }),

    lote: z
      .string()
      .optional()
      .refine((string) => string === undefined || string.length <= 10, {
        message: "Ingrese máximo 10 caracteres en lote",
      }),
    esFraccionamiento: z.enum(eleccion, {
      errorMap: () => ({ message: "Seleccione una opción" }),
    }),
    tipoBomba: z.enum(tipoBomba, {
      errorMap: () => ({ message: "Seleccione el tipo de bomba" }),
    }),
    tipoResistencia: z.enum(tipoResistencia, {
      errorMap: () => ({ message: "Seleccione el tipo de resistencia" }),
    }),
    elemento: z.enum(elemento, {
      errorMap: () => ({ message: "Seleccione un elemento" }),
    }),
    fecha: z.date({
      required_error: "Seleccione una fecha.",
    }),
  })
  .refine(
    (data) => {
      if (data.requiereConcreto === "Sí") {
        return !!data.cantidadConcretoNecesario;
      }
      return true;
    },
    {
      message: "Ingrese una cantidad",
      path: ["cantidadConcretoNecesario"],
    }
  )
  .refine(
    (data) => {
      if (data.esFraccionamiento === "Sí") {
        return !!data.fraccionamiento && !!data.lote;
      }
      return true;
    },
    {
      message: "Ingrese una dirección",
      path: ["fraccionamiento"],
    }
  );
