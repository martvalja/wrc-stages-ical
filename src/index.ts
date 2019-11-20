import fetch from "node-fetch";

import {createIcal} from "./icalHelper";
import {map} from "./jsonToEventMapper";

const dataUrl = "https://plus.wrc.com/cache/epgData/epgActive.json";

const fetchWrcData = async () => {
  const response = await fetch(dataUrl);
  const rawData = await response.json();
  return map(rawData);
};

export const handler = async (_event: any = {}): Promise<any> => {
  const rally = await fetchWrcData();
  const cal = createIcal(rally.stages.filter((stage) => stage.isStage()));
  return {
    body: cal.toString(),
    headers: {
      "Content-Type": "text/calendar",
    },
    statusCode: 200,
  };
};
