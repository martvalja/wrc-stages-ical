import fetch from 'node-fetch';

import {createIcal} from './icalHelper';
import {fromJson} from './helper/rally-helper';

const dataUrl = 'https://api.wrc.com/sdb/rallyevent/active';

const fetchWrcData = async () => {
  const response = await fetch(dataUrl);
  const rawData = await response.json();
  return fromJson(rawData);
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
