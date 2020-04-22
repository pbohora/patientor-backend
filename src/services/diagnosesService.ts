import diagnosesData from '../data/diagnoses.json';
import { DiagnosesData } from '../types';

const diagnoses: DiagnosesData[] = diagnosesData;

const getDiagnoses = (): DiagnosesData[] => {
  return diagnoses;
};

export default { getDiagnoses };
