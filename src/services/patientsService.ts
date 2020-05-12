import patientsData from '../data/patients';
import uuid from 'uuid/v1';

import {
  NonSensitivePatientsData,
  NewPatientData,
  PatientsData,
  NewEntryData,
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

const addPatientEntries = (
  id: string,
  newEntryData: NewEntryData
): PatientsData | { error: string } => {
  const newEntry = {
    ...newEntryData,
    id: uuid(),
  };
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };
  const patient = patients.find((patient) => patient.id === id);
  if (!patient) {
    return { error: 'no patient found!' };
  }
  if (!newEntry) {
    return { error: 'no entry found' };
  }
  if (
    !newEntry.date ||
    !newEntry.description ||
    !newEntry.specialist ||
    !newEntry.type
  ) {
    return { error: 'missing date or description or specialist or type!' };
  }
  switch (newEntry.type) {
    case 'Hospital':
      if (!newEntry.discharge) {
        throw new Error('discharge info is missing!');
      }
      patient.entries.push(newEntry);
      return patient;
    case 'HealthCheck':
      if (newEntry.healthCheckRating >= 0 && newEntry.healthCheckRating <= 3) {
        patient.entries.push(newEntry);
        return patient;
      }
      throw new Error('heath check rating is missing!');
    case 'OccupationalHealthcare':
      if (!newEntry.employerName) {
        throw new Error('employer name is missing!');
      }
      patient.entries.push(newEntry);
      return patient;
    default:
      return assertNever(newEntry);
  }
};

const addPatient = (newPatient: NewPatientData): PatientsData => {
  const newPatientData = {
    ...newPatient,
    id: uuid(),
  };
  patients.push(newPatientData);
  return newPatientData;
};

export default { getPatients, getSinglePatient, addPatient, addPatientEntries };
