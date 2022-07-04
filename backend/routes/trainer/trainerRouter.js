const express = require("express");
const router = express.Router();

const {
  registerTrainer,
  loginTrainer,
  UpdateTrainer,
  deleteTrainer,
  getAllTrainers,
  ChangeStatusTrainer
} = require("../../controllers/trainerController");

// Register-Traineer
router.post("/register", registerTrainer);

// Login-Trainer
router.post("/login", loginTrainer);

// Update-Trainer
router.put("/update/:id", UpdateTrainer);

// Delete-Trainer
router.delete("/delete/:id", deleteTrainer);

// Get-all-Trainers
router.get("/alltrainers",getAllTrainers)

// change-trainer-status
router.put("/status/:id",ChangeStatusTrainer)
module.exports = router;
