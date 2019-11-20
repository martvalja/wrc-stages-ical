import ScheduledEvent from './scheduledEvent';

export default class Rally {
  public stages: ScheduledEvent[] = [];

  public constructor(stages: ScheduledEvent[]) {
    this.stages = stages;
  }
}
