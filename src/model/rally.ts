import Asset from './asset';

export default class Rally {
    public readonly name: string;
    private readonly assets: Asset[] = [];

    public constructor(name: string, assets: Asset[]) {
        this.name = name;
        this.assets = assets;
    }

    public get stages() {
        return this.assets.filter(asset => asset.isStage());
    }
}
