import {map} from './jsonToEventMapper';
import fetch from 'node-fetch';
import {createIcal} from './icalHelper';

const dataUrl = "https://plus.wrc.com/cache/epgData/epgActive.json";

const fetchWrcData = async () => {
  const response = await fetch(dataUrl);
  const rawData = await response.json();
  return map(rawData);
};

export const handler = async (_event: any = {}): Promise<any> => {
  const rally = await fetchWrcData();
  const cal = createIcal(rally.stages.filter((stage) => stage.title.startsWith("SS")));
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/calendar"
    },
    body: cal.toString()
  };
};
