import express from "express";
import {
  home,
  patient,
  chart,
  getAddPatient,
  postAddPatient,
  sendChart,
  patientDetail,
  deletePatient,
  setDate,
  sendDate
} from "../Controllers/controller";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.patient, patient);
globalRouter.get(routes.chart, chart);

globalRouter.get(routes.addPatient, getAddPatient);
globalRouter.post(routes.addPatient, postAddPatient);

globalRouter.get(routes.patientDetail(), patientDetail);
globalRouter.post(routes.sendChart(), sendChart);

globalRouter.get(routes.deletePatient(), deletePatient);

globalRouter.get(routes.setDate(), setDate);
globalRouter.post(routes.sendDate(), sendDate);

export default globalRouter;
