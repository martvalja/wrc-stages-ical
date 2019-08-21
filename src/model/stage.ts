import moment from 'moment';

export default class Stage {
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
}