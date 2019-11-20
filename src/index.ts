import fetch from 'node-fetch';

import {createIcal} from './icalHelper';
import {mapRawDataToScheduledEvents} from './jsonToScheduledEventMapper';
import Rally from './model/rally';

const dataUrl = 'https://plus.wrc.com/cache/epgData/epgActive.json';

const fetchWrcData = async () => {
  const response = await fetch(dataUrl);
  const rawData = await response.json();
  const events = mapRawDataToScheduledEvents(rawData);
  return new Rally(events);
};

export const handler = async (_event: any = {}): Promise<any> => {
  const rally = await fetchWrcData();
  const cal = createIcal(rally.stages);
  return {
    body: cal.toString(),
    headers: {
      'Content-Type': 'text/calendar',
    },
    statusCode: 200,
  };
};
