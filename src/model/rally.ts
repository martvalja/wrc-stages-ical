import ScheduledEvent from './scheduledEvent';
import {isScheduledEventStage} from '../scheduledEventHelper';

export default class Rally {
  private readonly scheduledEvents: ScheduledEvent[] = [];

  public constructor(scheduledEvents: ScheduledEvent[]) {
    this.scheduledEvents = scheduledEvents;
  }

  public get stages() {
    return this.scheduledEvents.filter(isScheduledEventStage);
  }
}
