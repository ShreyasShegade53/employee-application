import { IAddress, NewAddress } from './address.model';

export const sampleWithRequiredData: IAddress = {
  id: 28536,
};

export const sampleWithPartialData: IAddress = {
  id: 6015,
  line1: 'or',
  country: 'Brunei Darussalam',
};

export const sampleWithFullData: IAddress = {
  id: 24005,
  line1: 'ah huzzah',
  line2: 'gasoline because failing',
  country: 'Saint Martin',
  state: 'feel dearest supposing',
  city: 'North Arvillastad',
  pincode: 4392,
};

export const sampleWithNewData: NewAddress = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
