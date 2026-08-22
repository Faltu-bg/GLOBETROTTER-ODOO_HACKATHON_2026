const mongoose = require("mongoose");

const tripStopSchema = new mongoose.Schema(
  {
    trip_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true
    },

    city_id: {
      type: String,
      ref: "City",
      required: true
    },

    date: {
      type: Date,
      required: true
    },


    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

tripStopSchema.index({
  trip_id: 1,
  stop_order: 1
});

module.exports = mongoose.model("TripStop", tripStopSchema);