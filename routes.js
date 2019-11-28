const HOME = "/";
const ADD_PATIENT = "/add-patient";
const PATIENT = "/patient";
const CHART = "/chart";

const PATIENT_DETAIL = "/:id/patient-detail";
const SEND_CHART = "/:id/send-chart";
const DELETE_PATIENT = "/:id/delete";
const SET_DATE = "/:id/set-date";
const SEND_DATE = "/:id/send-date";

//mobile routes

const PATIENTS = "/patients";

const routes = {
  home: HOME,
  patient: PATIENT,
  addPatient: ADD_PATIENT,
  chart: CHART,
  patientDetail: id => {
    if (id) {
      return `/${id}/patient-detail`;
    } else {
      return PATIENT_DETAIL;
    }
  },
  sendChart: id => {
    if (id) {
      return `/${id}/send-chart`;
    } else {
      return SEND_CHART;
    }
  },
  deletePatient: id => {
    if (id) {
      return `/${id}/delete`;
    } else {
      return DELETE_PATIENT;
    }
  },
  setDate: id => {
    if (id) {
      return `/${id}/set-date`;
    } else {
      return SET_DATE;
    }
  },
  sendDate: id => {
    if (id) {
      return `/${id}/send-date`;
    } else {
      return SEND_DATE;
    }
  },
  patients: PATIENTS
};

export default routes;
