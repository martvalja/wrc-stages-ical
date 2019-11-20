import moment = require('moment');
import ScheduledEvent from './model/scheduledEvent';

export const mapRawDataToScheduledEvents = (rawData: any) => {
  const event = rawData.rallyEvent;
  return mapEvents(event.days);
};

const mapEvents = (days: any) => {
  return Object.values(days)
    .map((day: any) => Array.from(day.epgElements))
    .reduce((acc, array) => acc.concat(array))
    .map((epgElement) => mapStage(epgElement));
};

const mapStage = (epgElement: any) => {
  const shortTitle = epgElement.type;
  const title = epgElement.title;
  const start = moment(epgElement.start);
  const end = moment(epgElement.end);
  return new ScheduledEvent(start, end, title, shortTitle);
};
