const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stationSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    latLng: {
      type: Object,
    },
    distToNext: {
      type: Number
    },
    timeToNext: {
      type: Number
    },
    no: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

const StationModel = mongoose.model('Station', stationSchema);

module.exports = StationModel;
