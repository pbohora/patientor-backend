import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientData from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientsService.getPatients());
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  try {
    res.json(patientsService.getSinglePatient(id));
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post('/:id/entries', (req, res) => {
  const { id } = req.params;
  try {
    const newEntryData = req.body;
    const updatedPatient = patientsService.addPatientEntries(id, newEntryData);
    res.status(200).json(updatedPatient);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatientData(req.body);
    const newPatientdata = patientsService.addPatient(newPatient);
    res.status(200).json(newPatientdata);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;
