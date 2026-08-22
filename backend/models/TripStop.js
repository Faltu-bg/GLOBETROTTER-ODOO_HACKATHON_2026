const mongoose = require("mongoose");

const tripStopSchema = new mongoose.Schema(
  {
    trip_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true
    },

    city: {
      type: String,
      required: true,
      trim: true
    },

    date: {
      type: Date,
      required: true
    },

    description: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

tripStopSchema.index({
  trip_id: 1,
  date: 1
});

module.exports = mongoose.model("TripStop", tripStopSchema);