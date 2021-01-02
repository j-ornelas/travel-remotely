import { City } from './dataTypes';

export const tokyo: City = {
  name: 'Tokyo',
  radio: [
    {
      name: 'Tokyo FM',
      description: 'Jazz, Talk',
      url: 'https://musicbird.leanstream.co/JCB032-MP3',
    },
  ],
  videos: [
    {
      url: 'https://www.youtube.com/watch?v=wh6Wr93jrU4',
      timeStart: '8',
      night: true,
      car: true,
    },
    {
      url: 'https://www.youtube.com/watch?v=2PqkuJMbHaw',
      timeStart: '0',
      night: true,
      walk: true,
    },
    {
      url: 'https://www.youtube.com/watch?v=P6MzjAPTni8',
      timeStart: '0',
      day: true,
      walk: true,
    },
  ],
};
