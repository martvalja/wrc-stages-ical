import moment from 'moment';

import {isScheduledEventStage} from '../src/scheduledEventHelper';
import ScheduledEvent from '../src/model/scheduledEvent';

describe('isStage should', () => {
  test('be false when scheduled event has empty titles', () => {
    const scheduledEvent = new ScheduledEvent(moment(), moment(), '', '');
    const isStage = isScheduledEventStage(scheduledEvent);

    expect(isStage).toBeFalsy();
  });

  test('be false when scheduled event has studio titles', () => {
    const scheduledEvent = new ScheduledEvent(moment(), moment(), 'studio', 'studio');
    const isStage = isScheduledEventStage(scheduledEvent);

    expect(isStage).toBeFalsy();
  });

  test('be true when scheduled event title contains SS', () => {
    const scheduledEvent = new ScheduledEvent(moment(), moment(), 'ss', '');
    const isStage = isScheduledEventStage(scheduledEvent);

    expect(isStage).toBeTruthy();
  });

  test('be true when scheduled event title contains power stage', () => {
    const scheduledEvent = new ScheduledEvent(moment(), moment(), 'power stage', '');
    const isStage = isScheduledEventStage(scheduledEvent);

    expect(isStage).toBeTruthy();
  });

  test('be true when scheduled event shortTitle contains power stage', () => {
    const scheduledEvent = new ScheduledEvent(moment(), moment(), '', 'power stage');
    const isStage = isScheduledEventStage(scheduledEvent);

    expect(isStage).toBeTruthy();
  });
});
