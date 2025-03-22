const express = require("express");
const router = express.Router();
const DisabilityData = require("../models/table_mode");

router.post("/insert", async (req, res) => {
  try {
    await DisabilityData.deleteMany({});

    const initialData = [
      {
        category: "Blind",
        participants: 5,
        ballotsCompleted: 1,
        ballotsIncomplete: 4,
        accuracy: "34.5% (n=1)",
        timeToComplete: "1199 sec (n=1)",
      },
      {
        category: "Low Vision",
        participants: 5,
        ballotsCompleted: 2,
        ballotsIncomplete: 3,
        accuracy: "98.3% (n=2) (97.7% n=3)",
        timeToComplete: "1716 sec (n=3) (1934 sec, n=2)",
      },
      {
        category: "Dexterity",
        participants: 5,
        ballotsCompleted: 4,
        ballotsIncomplete: 1,
        accuracy: "98.3% (n=4)",
        timeToComplete: "1672.1 sec (n=4)",
      },
      {
        category: "Mobility",
        participants: 3,
        ballotsCompleted: 3,
        ballotsIncomplete: 0,
        accuracy: "95.4% (n=3)",
        timeToComplete: "1416 sec (n=3)",
      },
    ];

    await DisabilityData.insertMany(initialData);
    res.status(201).json({ message: "Data seeded successfully" });
  } catch {}
});

router.get("/data", async (req, res) => {
  try {
    const data = await DisabilityData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
