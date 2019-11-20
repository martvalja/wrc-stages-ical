import ScheduledEvent from './model/scheduledEvent';

export const isScheduledEventStage = (scheduledEvent: ScheduledEvent) => {
  if (scheduledEvent.title.toLowerCase().startsWith('ss')) {
    return true;
  }
  if (scheduledEvent.title.toLowerCase().includes('power stage')) {
    return true;
  }
  if (scheduledEvent.shortTitle.toLowerCase().includes('power stage')) {
    return true;
  }
  return false;
};

