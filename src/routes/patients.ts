import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientData from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientsService.getPatients());
});

router.post('/', (req, res) => {
  try {
    const newPerson = toNewPatientData(req.body);
    const newPatientdata = patientsService.addPatient(newPerson);
    res.json(newPatientdata);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;
