const express = require("express");

const { JobsModel } = require("../models/job.model");
const { authenticate } = require("../middlewares/authenticate.middleware");
// const { roleAuth } = require("../middlewares/role.middleware");
const jobRouter = express.Router();

// , roleAuth("admin")

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
//   console.log("jobdata", jobdata);
  try {
    const job = new JobsModel(jobdata);
    job.save();
    // console.log("job", job);
    res
      .status(200)
      .send({ msg: "Job details posted successfully!", Jobs: job });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Failed to post job!" });
  }
});

//   jobRouter.get("/admin/get/jobs",authenticate, async (req, res) => {

//   });

module.exports = { jobRouter };
