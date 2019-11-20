import ScheduledEvent from './scheduledEvent';

export default class Rally {
  private readonly scheduledEvents: ScheduledEvent[] = [];

  public constructor(scheduledEvents: ScheduledEvent[]) {
    this.scheduledEvents = scheduledEvents;
  }

  public get stages() {
    return this.scheduledEvents.filter((scheduledEvent) => scheduledEvent.isStage());
  }
}
