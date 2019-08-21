import Stage from './stage';

export default class Rally {
  public stages: Stage[] = [];

  public constructor(stages: Stage[]) {
    this.stages = stages;
  }
}