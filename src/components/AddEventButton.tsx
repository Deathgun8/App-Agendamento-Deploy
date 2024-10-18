import { createEventsServicePlugin } from '@schedule-x/events-service'
 
const eventsServicePlugin = createEventsServicePlugin();
 
const calendar = createCalendar(
  { /* config */ },
  [eventsServicePlugin]
)
calendar.render(document.getElementById('calendar'))
 
calendar.eventsService.add({
  title: 'Event 1',
  start: '2024-04-20',
  end: '2024-04-20',
  id: 1
})
 
eventsServicePlugin.get(1) // { title: 'Event 1', start: '2024-04-20', end: '2024-04-20', id: 1 }
 
eventsServicePlugin.getAll() // [{ title: 'Event 1', start: '2024-04-20', end: '2024-04-20', id: 1 }]
 
eventsServicePlugin.update({
  title: 'Real title',
  start: '2024-04-20',
  end: '2024-04-20',
  id: 1
})
 
eventsServicePlugin.remove(1)