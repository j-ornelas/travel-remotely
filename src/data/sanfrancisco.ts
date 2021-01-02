import { City } from './dataTypes';

export const sanfrancisco: City = {
  name: 'San Francisco',
  radio: [
    {
      name: 'KQED',
      description: 'Bay Area public radio',
      url: 'https://streams.kqed.org/',
    },
  ],
  videos: [
    {
      url: 'https://www.youtube.com/watch?v=l72z2l_1h9A',
      timeStart: '24',
      day: true,
      car: true,
    },
    {
      url: 'https://www.youtube.com/watch?v=fXVgJsRIII0',
      timeStart: '15',
      night: true,
      walk: true,
    },
  ],
};
