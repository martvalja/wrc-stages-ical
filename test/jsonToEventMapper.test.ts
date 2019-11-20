import moment from 'moment';

import {mapRawDataToScheduledEvents} from '../src/jsonToEventMapper';

describe('mapRawDataToScheduledEvents should', () => {
  test('return correct number of scheduled events', () => {
    const rawData = require('../test-data/2019-rally-spain.json');
    const events = mapRawDataToScheduledEvents(rawData);

    expect(events.length).toBe(38);
  });

  test('set correct start and end time for a scheduled event', () => {
    const rawData = require('../test-data/2019-rally-spain.json');
    const firstEvent = mapRawDataToScheduledEvents(rawData)[0];

    expect(firstEvent.startDate.toISOString()).toEqual(moment('2019-10-25T08:00+01:00').toISOString());
    expect(firstEvent.endDate.toISOString()).toEqual(moment('2019-10-25T08:23+01:00').toISOString());
  });

  test('set correct title and short title for a scheduled event', () => {
    const rawData = require('../test-data/2019-rally-spain.json');
    const firstEvent = mapRawDataToScheduledEvents(rawData)[0];

    expect(firstEvent.title).toEqual('Good Morning Rally Fans');
    expect(firstEvent.shortTitle).toEqual('STUDIO');
  });
});
