export interface DiagnosesData {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export interface PatientsData {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type NonSensitivePatientsData = Omit<PatientsData, 'ssn'>;

export type NewPatientData = Omit<PatientsData, 'id'>;
