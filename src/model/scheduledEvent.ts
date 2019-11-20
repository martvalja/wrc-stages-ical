import moment from 'moment';

export default class ScheduledEvent {
  public startDate: moment.Moment;
  public endDate: moment.Moment;
  public shortTitle: string;
  public title: string;

  constructor(startDate: moment.Moment, endDate: moment.Moment, title: string, shortTitle: string) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.shortTitle = shortTitle;
    this.title = title;
  }

  public isStage(): boolean {
    if (this.title.toLowerCase().startsWith('ss')) {
      return true;
    }
    if (this.title.toLowerCase().includes('power stage')) {
      return true;
    }
    if (this.shortTitle.toLowerCase().includes('power stage')) {
      return true;
    }
    return false;
  }
}
