import ical from 'ical-generator';

import Asset from './model/asset';

export const createIcal = (stages: Asset[]) => {
  const cal = ical();
  cal.domain('wrc.com');
  stages.forEach((stage) => createEvent(cal, stage));
  return cal;
};

const createEvent = (cal: ical.ICalCalendar, stage: Asset) => {
  cal.createEvent({
    end: stage.end,
    start: stage.start,
    summary: stage.title,
  });
};
