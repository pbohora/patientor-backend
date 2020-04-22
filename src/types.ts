export interface DiagnosesData {
  code: string;
  name: string;
  latin?: string;
}

export interface PatientsData {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export type NonSensitivePatientsData = Omit<PatientsData, 'ssn'>;
