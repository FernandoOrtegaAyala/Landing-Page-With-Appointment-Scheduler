import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import moment from "moment";
import {
  Calendar as BigCalendar,
  CalendarProps,
  DateLocalizer,
  momentLocalizer,
  Navigate,
  NavigateAction,
  ToolbarProps,
  View,
  Views,
} from "react-big-calendar";

import "moment/locale/es";

import { number } from "zod";

import HamburgerButton from "./HamburgerButton";
import ToolbarCalendar from "./ToolbarCalendar";
import YearView from "./YearView";

const CustomToolbar = ({ onNavigate, label, view, onView }: ToolbarProps) => {
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <ToolbarCalendar view={view} onView={onView} />
      <div className="bg-primary shadow-2xl h-14 w-full flex items-center justify-between px-2 text-white lg:px-16">
        <div className="flex items-center gap-3">
          <HamburgerButton />
          <span
            className={`${view === "month" || view === "year" ? "text-2xl" : "text-lg"} font-semibold `}>
            {label}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onNavigate(Navigate.PREVIOUS)}
            className="w-8 h-8">
            <ChevronLeft className="w-full h-full" />
          </button>
          <button
            onClick={() => onNavigate(Navigate.TODAY)}
            className="w-auto h-auto">
            <span className="text-xl font-medium">Hoy</span>
          </button>
          <button onClick={() => onNavigate(Navigate.NEXT)} className="w-8 h-8">
            <ChevronRight className="w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const customFormats = {
  dayHeaderFormat: (date: Date) => {
    return capitalizeFirstLetter(moment(date).format(`dddd DD [de] MMMM YYYY`));
  },
  dayFormat: (date: Date) => {
    const NumeroDia = moment(date).format(`DD`);
    const LetraDia = capitalizeFirstLetter(moment(date).format(`dddd`)).charAt(
      0
    );
    return `${LetraDia} ${NumeroDia}`;
  },
  monthHeaderFormat: (date: Date) => {
    return moment(date)
      .format("MMMM yyyy")
      .split(" ")
      .map(capitalizeFirstLetter)
      .join(" ");
  },
  dayRangeHeaderFormat: (
    { start, end }: { start: Date; end: Date },
    culture?: string,
    localizer?: any
  ) => {
    let startDate = capitalizeFirstLetter(
      moment(start).format("MMMM [del] DD")
    );
    let endDate = moment(end).format("DD YYYY");
    return `${startDate} al ${endDate}`;
  },
  weekdayFormat: (date: Date) =>
    capitalizeFirstLetter(localizer.format(date, "dd").charAt(0)),
  agendaDateFormat: (date: Date) =>
    capitalizeFirstLetter(moment(date).format(`dddd DD MMMM YYYY`)),
  agendaHeaderFormat: (
    { start, end }: { start: Date; end: Date },
    culture?: string,
    localizer?: any
  ) => {
    let startDate = capitalizeFirstLetter(moment(start).format("DD/MMMM/YYYY"));
    let endDate = moment(end).format("DD/MMMM/YYYY");
    return `${startDate} - ${endDate}`;
  },
  agendaTimeRangeFormat: ({ start, end }, culture, localizer) =>
    localizer.format(start, "hh:mm A", culture) +
    " - " +
    localizer.format(end, "hh:mm A", culture),
};

moment.locale("es");
const localizer = momentLocalizer(moment);

export default function Calendar(props: Omit<CalendarProps, "localizer">) {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  const dayPropGetter = (date: Date) => {
    return {
      className: moment(date).day() === 0 ? "red-text" : "",
    };
  };

  return (
    <BigCalendar
      className=""
      {...props}
      localizer={localizer}
      defaultView={Views.MONTH}
      view={view}
      date={date}
      onView={(view) => setView(view)}
      onNavigate={(date) => setDate(date)}
      min={moment("2024-02-10T08:00:00").toDate()}
      max={moment("2024-02-10T21:00:00").toDate()}
      formats={customFormats}
      dayPropGetter={dayPropGetter}
      components={{
        toolbar: CustomToolbar,
      }}
      views={
        {
          month: true,
          day: true,
          week: true,
          agenda: true,
          year: YearView,
        } as any
      }
      messages={{
        agenda: "Agenda",
        date: "Fecha",
        time: "Hora",
        event: "Reservación",
        noEventsInRange: "Sin reservaciones entre estas fechas",
        showMore: (count: number) => `${count} mas`,
        allDay: "Todo el día",
      }}
    />
  );
}
