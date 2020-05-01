export interface DiagnosesData {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}

export interface PatientsData {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}

export type NonSensitivePatientsData = Omit<PatientsData, 'ssn' | 'entries'>;

export type NewPatientData = Omit<PatientsData, 'id'>;
