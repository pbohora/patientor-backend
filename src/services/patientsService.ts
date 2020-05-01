import patientsData from '../data/patients';
import uuid from 'uuid/v1';

import {
  NonSensitivePatientsData,
  NewPatientData,
  PatientsData,
} from '../types';

const patients: PatientsData[] = patientsData;

const getPatients = (): NonSensitivePatientsData[] => {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  );
};

const getSinglePatient = (id: string): PatientsData | undefined => {
  return patients.find((patient) => patient.id === id);
};

const addPatient = (newPatient: NewPatientData): PatientsData => {
  const newPatientData = {
    ...newPatient,
    id: uuid(),
  };
  patients.push(newPatientData);
  return newPatientData;
};

export default { getPatients, getSinglePatient, addPatient };
