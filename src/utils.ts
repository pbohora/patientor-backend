/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatientData, Gender } from './types';

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isSsn = (ssn: string): boolean => {
  return /^\d{6,8}[-|(\s)]{0,1}\d{2,4}[A-Z]?$/.test(ssn);
};

const isGender = (gender: any): gender is Gender => {
  return Object.values(Gender).includes(gender);
};

const parseString = (string: any): string => {
  if (!string || !isString(string)) {
    throw new Error('Incorrect or missing comment: ' + string);
  }

  return string;
};

// const parseOccupation = (occupation: any): string => {
//   if (!occupation || !isString(occupation)) {
//     throw new Error('Incorrect or missing comment: ' + occupation);
//   }

//   return occupation;
// };

const parseSsn = (ssn: any): string => {
  if (!ssn || !isString(ssn) || !isSsn(ssn)) {
    throw new Error('Incorrect or missing ssn: ' + ssn);
  }

  return ssn;
};

const parseDateOFBirth = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date of birth: ' + date);
  }
  return date;
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing weather: ' + gender);
  }
  return gender;
};

const toNewPatientData = (object: any): NewPatientData => {
  const newData: NewPatientData = {
    name: parseString(object.name),
    dateOfBirth: parseDateOFBirth(object.dateOfBirth),
    ssn: parseSsn(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
  };
  return newData;
};

export default toNewPatientData;
