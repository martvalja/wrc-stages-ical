import moment from 'moment';

export default class ScheduledEvent {
  public readonly startDate: moment.Moment;
  public readonly endDate: moment.Moment;
  public readonly shortTitle: string;
  public readonly title: string;

  constructor(startDate: moment.Moment, endDate: moment.Moment, title: string, shortTitle: string) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.shortTitle = shortTitle;
    this.title = title;
  }
}
