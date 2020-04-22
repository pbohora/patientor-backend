import patientsData from '../data/patients.json';
import { NonSensitivePatientsData, PatientsData } from '../types';

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

export default { getPatients };
