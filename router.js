import express from "express";
import {
  home,
  patient,
  chart,
  getAddPatient,
  postAddPatient,
  patientDetail,
  sendChart,
  view
} from "./controller";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/patient", patient);
globalRouter.get("/chart", chart);

globalRouter.get("/addPatient", getAddPatient);
globalRouter.post("/addPatient", postAddPatient);

globalRouter.get("/sendChart", sendChart);
globalRouter.get("/patientDetail", patientDetail);

globalRouter.get("/view", view);

export default globalRouter;
