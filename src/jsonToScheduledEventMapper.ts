import moment = require('moment');
import ScheduledEvent from './model/scheduledEvent';

export const mapRawDataToScheduledEvents = (rawData: any) => {
  const event = rawData.rallyEvent;
  return mapEvent(event.days);
};

const mapEvent = (days: any) => {
  return Object.values(days)
    .map((day: any) => Array.from(day.epgElements))
    .reduce((acc, array) => acc.concat(array))
    .map(mapToScheduledEvent);
};

const mapToScheduledEvent = (epgElement: any) => {
  const shortTitle = epgElement.type;
  const title = epgElement.title;
  const start = moment(epgElement.start);
  const end = moment(epgElement.end);
  return new ScheduledEvent(start, end, title, shortTitle);
};
