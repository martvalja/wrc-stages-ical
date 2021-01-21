export default class Asset {
    public readonly start: Date;
    public readonly end: Date;
    public readonly title: string;

    constructor(startDate: Date, endDate: Date, title: string) {
        this.start = startDate;
        this.end = endDate;
        this.title = title;
    }

    public isStage() {
        const upper = this.title.toUpperCase();
        return upper.startsWith('SS'); // TODO: this might need some improvements
    }
}
