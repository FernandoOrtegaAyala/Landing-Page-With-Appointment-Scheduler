import { useEffect, useState } from "react";
import Link from "next/link";
import { HomeIcon, XIcon } from "lucide-react";
import { ToolbarProps, View } from "react-big-calendar";

import AgendaSinColorSVG from "./SVG/AgendaSinColorSVG";
import CalendarDaySVG from "./SVG/CalendarDaySVG";
import CalendarHourSVG from "./SVG/CalendarHourSVG";
import CalendarMonthSVG from "./SVG/CalendarMonthSVG";
import CalendarWeekSVG from "./SVG/CalendarWeekSVG";
import CalendarYearSVG from "./SVG/CalendarYearSVG";

export default function ToolbarCalendar({
  view,
  onView,
}: {
  view: View;
  onView: (view: View) => void;
}) {
  const [click, setClick] = useState(false);
  const navCalendar = document.getElementById("navCalendar");

  useEffect(() => {
    navCalendar?.classList.toggle("hidden");
    navCalendar?.classList.toggle("flex");
  }, [click]);

  function handleClick() {
    setClick((prevclick) => !prevclick);
  }

  function handleYear() {
    onView("year");
    setClick((prevclick) => !prevclick);
  }
  function handleMonth() {
    onView("month");
    setClick((prevclick) => !prevclick);
  }
  function handleWeek() {
    onView("week");
    setClick((prevclick) => !prevclick);
  }
  function handleDay() {
    onView("day");
    setClick((prevclick) => !prevclick);
  }
  function handleAgendados() {
    onView("agenda");
    setClick((prevclick) => !prevclick);
  }

  return (
    <>
      <div
        id="navCalendar"
        className=" hidden w-full h-full z-50 absolute bg-black bg-opacity-70">
        <div className="w-9/12 lg:w-5/12 h-auto z-50 origin-bottom-left animate-open-menu rounded-r-3xl bg-card flex flex-col items-center justify-start px-8 pt-6">
          <div className="w-full h-auto flex items-center justify-end">
            <button onClick={handleClick} className="w-auto h-auto text-white">
              <XIcon className="w-8 h-8" />
            </button>
          </div>
          <div className="w-full h-auto flex flex-col items-center gap-7 mt-8 pb-6 border-b-2 border-dotted border-border">
            <button
              onClick={handleYear}
              className="w-full h-auto flex items-center justify-start gap-3 text-white">
              <CalendarYearSVG />
              <span className="font-medium text-xl">Año</span>
            </button>
            <button
              onClick={handleMonth}
              className="w-full h-8 flex items-center justify-start gap-3 text-white ">
              <CalendarMonthSVG />
              <span className="font-medium text-xl">Mes</span>
            </button>
            <button
              onClick={handleWeek}
              className="w-full h-8 flex items-center justify-start gap-3 text-white">
              <CalendarWeekSVG />
              <span className="font-medium text-xl">Semana</span>
            </button>
            <button
              onClick={handleDay}
              className="w-full h-8 flex items-center justify-start gap-3 text-white">
              <CalendarDaySVG />
              <span className="font-medium text-xl">Día</span>
            </button>
          </div>
          <div className="w-full h-auto flex flex-col items-center gap-7 mt-6">
            <button
              onClick={handleAgendados}
              className="w-full h-8 flex items-center justify-start gap-3 text-white">
              <CalendarHourSVG />
              <span className="font-medium text-xl">Agendados</span>
            </button>
            <Link
              href="/"
              className="w-full h-8 flex items-center justify-start gap-3 text-white">
              <AgendaSinColorSVG />
              <span className="font-medium text-xl">Agenda</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
