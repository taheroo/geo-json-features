const router = require('express').Router();
const { osmtogeojson } = require('../utils/osmtogeojson');
const { getOSMData } = require('../services/osm');

router.get('/geojson', async (req, res) => {
  try {
    const { bbox } = req.query;
    const osm_data = await getOSMData(bbox);
    const result = osmtogeojson(osm_data);
    return res.status(201).send(result);
  } catch (error) {
    return res.status(500).send({ error });
  }
});

module.exports = router;
