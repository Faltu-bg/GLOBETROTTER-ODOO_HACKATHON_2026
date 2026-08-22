const express = require("express");
const mongo = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

const User = require("./models/User.js");
const Trip = require("./models/Trip.js");
const TripStop = require("./models/TripStop.js");
const Activity = require("./models/Activity.js");
const userRoutes = require("./routes/userRoutes.js")
const verification = require("./middleware/jsonverification.js")

app.use(cors());
app.use(express.json());

mongo.connect(`mongodb+srv://GlobeTrotter:GlobeTrotter2026@cluster0.z97tamy.mongodb.net/GlobeTrotter`).then(()=>{
    console.log("Mongo connected to atlas")
})

app.use("/",userRoutes)
app.get("/user", async (req, res) => {
    const users = await User.find();
    res.json(users);
});
app.get("/user/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(user);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch user",
            error: error.message
        });
    }
});

app.get("/user/:userId/trips", async (req, res) => {
    try {
        const trips = await Trip.find({
            user_id: req.params.userId
        }).sort({
            start_date: 1
        });

        res.json(trips);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch user trips",
            error: error.message
        });
    }
});
app.get("/trip", async (req, res) => {
    const trips = await Trip.find();
    res.json(trips);
});
app.get("/trip/:tripId", async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.tripId);

        if (!trip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }

        res.json(trip);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch trip",
            error: error.message
        });
    }
});


app.get("/tripstop", async (req, res) => {
    const stops = await TripStop.find();
    res.json(stops);
});
app.get("/trip/:tripId/stops", async (req, res) => {
    try {
        const stops = await TripStop.find({
            trip_id: req.params.tripId
        }).sort({
            date: 1
        });

        res.json(stops);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch stops",
            error: error.message
        });
    }
});


app.get("/activity", async (req, res) => {
    const activities = await Activity.find();
    res.json(activities);
});
app.get("/tripstop/:stopId/activities", async (req, res) => {
    try {
        const activities = await Activity.find({
            trip_stop_id: req.params.stopId
        }).sort({
            activity_date: 1,
            start_time: 1
        });

        res.json(activities);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch activities",
            error: error.message
        });
    }
});

app.post("/tripstop/:stopId/activities", async (req, res) => {
    try {
        const {
            name,
            description,
            activity_date,
            start_time,
            end_time,
            estimated_cost,
            location
        } = req.body;

        if (!name || !activity_date || !start_time) {
            return res.status(400).json({
                message: "Name, date and start time are required"
            });
        }

        const activity = await Activity.create({
            trip_stop_id: req.params.stopId,
            name,
            description: description || "",
            activity_date,
            start_time,
            end_time: end_time || "",
            estimated_cost: estimated_cost || 0,
            location: location || ""
        });

        res.status(201).json(activity);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to create activity",
            error: error.message
        });
    }
});

app.post("/trip/:tripId/stops", async (req, res) => {
    try {
        const { city, date, description } = req.body;

        if (!city || !date) {
            return res.status(400).json({
                message: "City and date are required"
            });
        }

        const stop = await TripStop.create({
            trip_id: req.params.tripId,
            city: city,
            date: date,
            description: description || ""
        });

        res.status(201).json(stop);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to create trip stop",
            error: error.message
        });
    }
});


app.put("/activity/:activityId", async (req, res) => {
    try {
        const activity = await Activity.findByIdAndUpdate(
            req.params.activityId,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!activity) {
            return res.status(404).json({
                message: "Activity not found"
            });
        }

        res.json(activity);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to update activity",
            error: error.message
        });
    }
});

app.put("/tripstop/:stopId", async (req, res) => {
    try {
        const {
            city,
            date,
            description
        } = req.body;

        const stop = await TripStop.findByIdAndUpdate(
            req.params.stopId,
            {
                city,
                date,
                description
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!stop) {
            return res.status(404).json({
                message: "Trip stop not found"
            });
        }

        res.json(stop);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to update section",
            error: error.message
        });
    }
});

app.post("/api/create_trip", verification, async (req, res) => {
    try {
        const {
            name,
            description,
            start_date,
            end_date,
            cover_photo_url
        } = req.body;

        if (!name || !start_date || !end_date) {
            return res.status(400).json({
                message: "Trip name, start date and end date are required"
            });
        }

        const trip = await Trip.create({
            user_id: req.user.id,
            name,
            description: description || "",
            start_date,
            end_date,
            cover_photo_url: cover_photo_url || "",
            status: "draft"
        });

        res.status(201).json({
            message: "Trip created successfully",
            trip
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to create trip",
            error: error.message
        });
    }
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


