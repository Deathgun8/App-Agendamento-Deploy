import './App.css';
import { ScheduleXCalendar, useCalendarApp} from '@schedule-x/react';
import { createViewWeek, createViewMonthGrid } from '@schedule-x/calendar';
import '@schedule-x/theme-default/dist/calendar.css'

function App() {
  // Configuração do calendário
  const calendar: any = useCalendarApp({
    views: [
      createViewWeek(),
      createViewMonthGrid() 
    ],
    events: [
      {
        id: 1,
        title: 'new event',
        start: '2025-01-01 00:00',
        end: '2025-01-01 02:00'
      }
    ],
    selectedDate: '2025-01-01'
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