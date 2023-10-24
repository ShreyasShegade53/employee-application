import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 11682,
};

export const sampleWithPartialData: IEmployee = {
  id: 31472,
  firstName: 'Priscilla',
  lastName: 'Watsica',
};

export const sampleWithFullData: IEmployee = {
  id: 29898,
  firstName: 'Chanel',
  lastName: 'Yost',
  email: 'Ford_Quitzon@hotmail.com',
  phoneNumber: 'snarl',
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
