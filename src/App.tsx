import "./App.css";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import {
  createViewWeek,
  createViewMonthGrid,
  createViewDay,
  createViewMonthAgenda,
} from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/calendar.css";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createResizePlugin } from "@schedule-x/resize";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { useState } from "react";
import PopUpAddEvent from "./components/PopUpAddEvent";
import { createCurrentTimePlugin } from "@schedule-x/current-time";

import events from "./events";

function App() {
  // Configuração do calendário
  const eventModal = createEventModalPlugin();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const eventsServicePlugin = createEventsServicePlugin();

  const calendar: any = useCalendarApp({
    views: [createViewWeek(), createViewMonthGrid(), createViewDay(), createViewMonthAgenda()],
    events: events,
    selectedDate: "2025-01-01",
    plugins: [
      createEventModalPlugin(),
      createDragAndDropPlugin(),
      createResizePlugin(),
      eventsServicePlugin,
      eventModal,
      createCurrentTimePlugin()
    ],
    locale: "pt-BR",
    firstDayOfWeek: 0,
  });

  const handleSaveEvent = (eventData: {
    title: string;
    start: string;
    end: string;
  }) => {
    // Convertendo as datas do formato ISO para o formato 'YYYY-MM-DD HH:mm'
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Meses começam do zero
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    calendar.eventsService.add({
      title: eventData.title,
      start: formatDate(eventData.start), // Converte a data de início
      end: formatDate(eventData.end), // Converte a data de término
      id: Math.random(), // Gerando um ID aleatório
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <ScheduleXCalendar calendarApp={calendar} />

      <button
        style={{ position: "absolute", top: "100px", left: "10px", zIndex: 1000, }}
        id="AddEvent"
        onClick={() => setIsPopUpOpen(true)}
      >
        Add event
      </button>

      <PopUpAddEvent
        isOpen={isPopUpOpen}
        onClose={() => setIsPopUpOpen(false)}
        onSave={handleSaveEvent}
      />
    </div>
  );
}

export default App;
