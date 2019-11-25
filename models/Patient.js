import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  name: String,
  sex: String,
  age: Number,
  chartNum: Number
});

const model = mongoose.model("Patient", PatientSchema);

export default model;
