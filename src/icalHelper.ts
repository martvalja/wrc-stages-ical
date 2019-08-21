import ical from 'ical-generator';

import Stage from './model/stage';

export const createIcal = (stages: Stage[]) => {
  const cal = ical();
  cal.domain('wrc.com');
  stages.forEach((stage) => createEvent(cal, stage));
  return cal;
};

const createEvent = (cal: ical.ICalCalendar, stage: Stage) => {
  cal.createEvent({
    summary: stage.title,
    start: stage.startDate,
    end: stage.endDate,
  });
};
