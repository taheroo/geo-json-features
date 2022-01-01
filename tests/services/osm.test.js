const { getOSMData } = require('../../src/services/osm');

describe('Test OSM request response data', () => {
  test('getOSMData', () => {
    const bounds = {
      minlat: 10.1737,
      minlon: 36.771,
      maxlat: 10.2074,
      maxlon: 36.7862,
    };
    return getOSMData(
      `${bounds.minlon},${bounds.minlat},${bounds.maxlon},${bounds.maxlat}`
    ).then((data) => {
      expect(data).toBeDefined();
      expect(data.bounds).toStrictEqual(bounds);
      expect(Array.isArray(data.elements)).toBe(true);
    });
  });
});
