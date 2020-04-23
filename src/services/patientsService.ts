import patientsData from '../data/patients.json';
import uuid from 'uuid/v1';

import {
  NonSensitivePatientsData,
  NewPatientData,
  PatientsData,
} from '../types';

const patients: PatientsData[] = patientsData;

const getPatients = (): NonSensitivePatientsData[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (newPatient: NewPatientData): NonSensitivePatientsData => {
  const newPatientData = {
    ...newPatient,
    id: uuid(),
  };
  patients.push(newPatientData);
  return newPatientData;
};

export default { getPatients, addPatient };
