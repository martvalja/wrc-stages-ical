import ical from 'ical-generator';

import ScheduledEvent from './model/scheduledEvent';

export const createIcal = (events: ScheduledEvent[]) => {
  const cal = ical();
  cal.domain('wrc.com');
  events.forEach((scheduledEvent) => createEvent(cal, scheduledEvent));
  return cal;
};

const createEvent = (cal: ical.ICalCalendar, scheduledEvent: ScheduledEvent) => {
  cal.createEvent({
    end: scheduledEvent.endDate,
    start: scheduledEvent.startDate,
    summary: scheduledEvent.title,
  });
};
