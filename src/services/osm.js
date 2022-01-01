const axios = require('axios');

exports.getOSMData = (bbox) => {
  return new Promise(async (resolve, reject) => {
    try {
      const osm_map = await axios.get(
        'https://www.openstreetmap.org/api/0.6/map?bbox=' + bbox
      );
      resolve(osm_map.data);
    } catch (error) {
      reject(error);
    }
  });
};
