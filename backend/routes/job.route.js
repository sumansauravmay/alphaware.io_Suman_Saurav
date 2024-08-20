const express = require("express");

const { JobsModel } = require("../models/job.model");
const { authenticate } = require("../middlewares/authenticate.middleware");
const jobRouter = express.Router();


jobRouter.get("/user/get/jobs", authenticate, async (req, res) => {
  try {
    const jobs = await JobsModel.find();
    res.send(jobs);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Failed to fetch job data!" });
  }
});

jobRouter.post("/admin/post/jobs", authenticate, async (req, res) => {
  const jobdata = req.body;
 
  try {
        const job = new JobsModel(jobdata);
        job.save();
        res
          .status(200)
          .send({ msg: "Job details posted successfully!", Jobs: job });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Failed to post job!" });
  }
});

module.exports = { jobRouter };
