"use client";

import { useEffect, useRef, useState } from "react";
import handleSubmitSearchForm from "@/helpers/handleSubmitSearchForm";
import { AvatarIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Input } from "./ui/input";

export default function SearchButton({
  setKeyValue,
  clases,
}: {
  setKeyValue: React.Dispatch<React.SetStateAction<number>>;
  clases: string;
}) {
  const Sugerencias = [
    {
      value: "cuenta 1",
      label: "Cuenta 1",
    },
    {
      value: "ejemplo 2",
      label: "Ejemplo 2",
    },
    {
      value: "relleno 3",
      label: "Relleno 3",
    },
    {
      value: "cuenta 4",
      label: "Cuenta 4",
    },
  ];

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputChange(search: string) {
    const newValue = search;
    setInputValue(newValue);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.length > 1) {
      event.preventDefault();
      const form = event.currentTarget.value;
      //PARA ENVIARLO form?.submit();
      console.log(form);
    }
  };

  const handleSelect = (currentValue: string) => {
    setInputValue(currentValue);
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const table = useReactTable();

  return (
    <>
      <Input
        placeholder="Filter tasks..."
        value={(table.getColumn("nombre")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("nombre")?.setFilterValue(event.target.value)
        }
        className="h-8 w-[150px] lg:w-[250px]"
      />
    </>
  );
}
