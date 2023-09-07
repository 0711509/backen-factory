const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box1Schema = new Schema({
  FacilityName: {
    type: String,
    required: [true, "Please Enter Facility Name"],
  },
  FacilityCode: {
    type: String,
    required: [true, "Please Enter Facility Code"],
  },
  MotherPlant: {
    type: String,
    required: [true, "Please Enter Mother Plant"],
  },
  Auditdate: {
    type: String,
    required: [true, "Please Enter Audit date"],
  },
  AuditedBy: {
    type: String,
    required: [true, "Please Enter Audited By"],
  },
  Inspectiontype: {
    type: String,
    required: [true, "Please Enter Inspection type"],
  },
  Ageofbuilding: {
    type: String,
    required: [true, "Please Enter Age of building"],
  },
  Buildingsizeinsqft: {
    type: String,
    required: [true, "Please Enter Building size in sqft"],
  },
  Numberofemployees: {
    type: String,
    required: [true, "Please Enter Number of employees"],
  },
  Operatinghours: {
    type: String,
    required: [true, "Please Enter Operating hours"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
("");
const Box1Model = mongoose.model("box1", Box1Schema);
module.exports = Box1Model;
