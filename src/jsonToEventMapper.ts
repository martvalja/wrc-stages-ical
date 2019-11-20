import moment = require("moment");

import Rally from "./model/rally";
import Stage from "./model/stage";

export const map = (rawData: any) => {
  const event = rawData.rallyEvent;
  const stages = mapStages(event.days);
  return new Rally(stages);
};

const mapStages = (days: any) => {
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
  return new Stage(start, end, title, shortTitle);
};
