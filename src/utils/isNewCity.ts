import moment from 'moment';
import { City } from '../data/dataTypes';

export function isNewCity(dateAdded: City['dateAdded']) {
  if (!dateAdded) return false;
  const validTimeFrame = moment()
    .clone()
    .subtract(7, 'days')
    .startOf('day');
  return moment(dateAdded).isAfter(validTimeFrame);
}
