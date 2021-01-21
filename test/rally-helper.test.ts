import {fromJson} from '../src/helper/rally-helper';

describe('rally-helper', () => {
    test('returns all stages', () => {
        const rawData = require('../test-data/2021-monte-carlo.json');
        const rally = fromJson(rawData);

        expect(rally.stages.length).toBe(14);
    });

    test('set correct start and end time for a scheduled event', () => {
        const rawData = require('../test-data/2021-monte-carlo.json');
        const rally = fromJson(rawData);

        const stageThree = rally.stages[2];
        expect(stageThree.start.toISOString()).toEqual(new Date('2021-01-22T05:08:00.000Z').toISOString());
        expect(stageThree.end.toISOString()).toEqual(new Date('2021-01-22T06:00:00.000Z').toISOString());
    });

    test('set correct title and short title for a scheduled event', () => {
        const rawData = require('../test-data/2021-monte-carlo.json');
        const rally = fromJson(rawData);

        const stageThree = rally.stages[2];
        expect(stageThree.title).toEqual('SS3 Aspremont - La Batie des Fonts 1');
    });
});
