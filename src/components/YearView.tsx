import { useMemo } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import "moment/locale/es";

import { DateLocalizer, Navigate, ViewProps, Views } from "react-big-calendar";
import Calendar from "react-calendar";

import "@/app/globals.css";
import "react-calendar/dist/Calendar.css";

import moment, { months } from "moment";

export default function YearView({
  date,
  localizer,
  onView,
  onNavigate,
  events,
}: ViewProps) {
  const currRange = YearView.range(date, { localizer });

  const CustomNavigationBar = ({ label, monthDate }) => (
    <div>
      <span
        onClick={(label) => {
          onView && onView(Views.MONTH);
          onNavigate(monthDate);
        }}
        className="font-semibold text-lg flex justify-center">
        {label}
      </span>
    </div>
  );

  const formatMonthYear = (locale, date) => {
    let dateString = date.toLocaleDateString(locale, {
      month: "long",
      year: "numeric",
    });
    dateString = dateString.split(" de ").join(" ");
    return dateString.charAt(0).toUpperCase() + dateString.slice(1);
  };

  const formatShortWeekday = (locale, date) => {
    const daysOfWeek = ["D", "L", "M", "M", "J", "V", "S"];
    return daysOfWeek[date.getDay()];
  };

  return (
    <div className="bg-fondoCalendario w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-14 px-4 lg:px-20 py-6 gap-4">
      {currRange.map((month, index) => {
        return (
          <div className="w-full h-full" key={index}>
            <CustomNavigationBar
              monthDate={month}
              label={formatMonthYear("es-ES", month)}
            />
            <Calendar
              formatShortWeekday={formatShortWeekday}
              locale={"es"}
              showNavigation={false}
              activeStartDate={month}
              tileClassName={({ date, view }) => {
                if (
                  view === "month" &&
                  events?.find((event) =>
                    moment(event.start).isSame(moment(date), "day")
                  )
                )
                  return "event-day";
                return null;
              }}
              onClickDay={(day) => {
                onView && onView(Views.DAY);
                onNavigate(day);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

YearView.range = (date: Date, { localizer }: { localizer: DateLocalizer }) => {
  const start = localizer.startOf(date, "year");
  const end = localizer.endOf(date, "year");

  const range = [];
  let current = start;

  while (localizer.lte(current, end, "year")) {
    range.push(current);
    current = localizer.add(current, 1, "month");
  }

  return range;
};

YearView.navigate = (
  date: Date,
  action: any,
  { localizer }: { localizer: DateLocalizer }
) => {
  if (action instanceof Date) return action;

  switch (action) {
    case Navigate.NEXT:
      return localizer.add(date, 1, "year");
    case Navigate.PREVIOUS:
      return localizer.add(date, -1, "year");
    default:
      return date;
  }
};

YearView.title = (date: Date, { localizer }: { localizer: DateLocalizer }) => {
  return localizer.format(date, "YYYY");
};
