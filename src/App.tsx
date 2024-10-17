import "./App.css";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek, createViewMonthGrid } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/calendar.css";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createResizePlugin } from "@schedule-x/resize";

import events from "./events";

function App() {
  // Configuração do calendário
  const calendar: any = useCalendarApp({
    views: [createViewWeek(), createViewMonthGrid()],
    events: events,
    selectedDate: "2025-01-01",
    plugins: [createEventModalPlugin(), createDragAndDropPlugin(), createResizePlugin()],
    locale: 'pt-BR'
  });

  return (
    <>
      <div>
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </>
  );
}

export default App;
