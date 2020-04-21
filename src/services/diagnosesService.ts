import diagnosesData from '../data/diagnoses.json';
import { DiagnosesData } from '../types';

const diagnoses: Array<DiagnosesData> = diagnosesData;

const getDiagnoses = (): Array<DiagnosesData> => {
  return diagnoses;
};

export default { getDiagnoses };
