const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    trip_stop_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TripStop",
      required: true
    },

   
    
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String
    },

    activity_date: {
      type: Date,
      required: true
    },

    start_time: {
      type: String,
      required: true
    },

    end_time: {
      type: String
    },

    estimated_cost: {
      type: Number,
      default: 0
    },


    location: {
      type: String
    }


  

  

  
  },
  {
    timestamps: true
  }
);

activitySchema.index({
  trip_stop_id: 1,
  activity_date: 1,
  start_time: 1
});

module.exports = mongoose.model("Activity", activitySchema);