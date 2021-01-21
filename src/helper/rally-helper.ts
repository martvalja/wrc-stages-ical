import Rally from '../model/rally';
import Asset from '../model/asset';

const extractRawAssets = (eventDays: any) => {
    const days = Array.from(eventDays);
    return days.flatMap((eventDay: any) => Array.from(eventDay.spottChannel.assets));
}

const mapAsset = (rawAsset: any) => {
    const title = rawAsset.alternative.title;
    const start = new Date(rawAsset.startUnix * 1000);
    const end = new Date(rawAsset.endUnix * 1000);
    return new Asset(start, end, title);
}

const getAssets = (data: any) => extractRawAssets(data.eventDays)
    .map((rawAsset: any) => mapAsset(rawAsset));

export const fromJson = (data: any): Rally => {
    const name = data.name;
    const assets = getAssets(data);
    return new Rally(name, assets);
}

