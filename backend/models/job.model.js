const mongoose = require("mongoose");
const jobSchema = mongoose.Schema({
userID: { type: String},
  company_name: { type: String, required: true },
  position: { type: String, required: true },
  contract: { type: String, required: true },
  location: { type: String, required: true }
});

const JobsModel = mongoose.model("jobs", jobSchema);
module.exports = { JobsModel };
