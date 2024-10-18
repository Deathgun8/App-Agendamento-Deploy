import "./App.css";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import {
  createViewWeek,
  createViewMonthGrid,
  createViewDay,
} from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/calendar.css";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createResizePlugin } from "@schedule-x/resize";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { useState } from "react";
import PopUpAddEvent from "./components/PopUpAddEvent";

import events from "./events";

function App() {
  // Configuração do calendário
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const eventsServicePlugin = createEventsServicePlugin();

  const calendar: any = useCalendarApp({
    views: [createViewWeek(), createViewMonthGrid(), createViewDay()],
    events: events,
    selectedDate: "2025-01-01",
    plugins: [
      createEventModalPlugin(),
      createDragAndDropPlugin(),
      createResizePlugin(),
      eventsServicePlugin,
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

    console.log("eventos salvos");
    calendar.eventsService.add({
      title: eventData.title,
      start: formatDate(eventData.start), // Converte a data de início
      end: formatDate(eventData.end), // Converte a data de término
      id: Math.random(), // Gerando um ID aleatório
    });
  };

  const allEvents = calendar.eventsService.getAll();
  console.log("Eventos atuais:", allEvents);

  return (
    <>
      <div>
        <ScheduleXCalendar calendarApp={calendar} />

        <button id="AddEvent" onClick={() => setIsPopUpOpen(true)}>
          Add event
        </button>

        <PopUpAddEvent
          isOpen={isPopUpOpen}
          onClose={() => setIsPopUpOpen(false)}
          onSave={handleSaveEvent}
        />
      </div>
    </>
  );
}

export default App;
