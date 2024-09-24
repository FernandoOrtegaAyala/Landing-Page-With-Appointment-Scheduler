"use client";

import { assert } from "console";
import { useState } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Calendar, CalendarIcon, Search, SearchIcon } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeButton } from "@/components/ThemeButton";

import SearchButton from "./SearchButton";
import AgendaSVG from "./SVG/AgendaSVG";
import CalendarSVG from "./SVG/CalendarSVG";
import CalendarYearSVG from "./SVG/CalendarYearSVG";

export default function Header() {
  const [visibility, setVisibility] = useState(true);
  const [value, setValue] = useState("");
  const [keyValue, setKeyValue] = useState(0);

  const handleSearchVisibility = () => setVisibility(false);

  return (
    <>
      <nav className="fixed top-0 z-[100] bg-primary w-full px-3  lg:px-40 py-1 h-14 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2 ">
          <div className="flex w-8 h-8 mr-2">
            <AgendaSVG />
          </div>
          {visibility && (
            <Select>
              <SelectTrigger className="w-full px-5 font-semibold text-white text-2xl bg-transparent border-none p-0 gap-10 focus:outline-none">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent className="border-none bg-background text-current ">
                <SelectGroup>
                  <SelectItem className="text-lg text-current" value="est">
                    Terminadas
                  </SelectItem>
                  <SelectItem className="text-lg text-current" value="cst">
                    Pendientes
                  </SelectItem>
                  <SelectItem className="text-lg text-current" value="mst">
                    Empresas
                  </SelectItem>
                  <SelectItem className="text-lg text-current" value="pst">
                    Privados
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </div>

        <div className="flex items-center gap-2 ">
          <Link href="/calendario" className="w-8 h-8 text-white lg:mr-5">
            <CalendarYearSVG />
          </Link>
          <div className="flex items-center justify-center gap-3">
            <ThemeButton />
          </div>
        </div>
      </nav>
    </>
  );
}
