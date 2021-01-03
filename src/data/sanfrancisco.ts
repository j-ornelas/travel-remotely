import { City } from './dataTypes';

export const sanfrancisco: City = {
  name: 'San Francisco',
  radio: [
    {
      name: 'KQED',
      description: 'San Francisco public radio',
      url: 'https://streams.kqed.org/',
    },
    {
      name: 'KPFB',
      description: 'Berkeley public radio',
      url: 'https://icecast.pacifica.org:8443/kpfb',
    },
    {
      name: 'KALW',
      description: 'San Francisco public radio 2',
      url: 'https://live.streamguys1.com:2435/kalw',
    },
    {
      name: 'KCEA',
      description: 'Big Band / Swing / "The Great American Songbook"',
      url: 'http://streaming.rubinbroadcasting.com/kcea',
    },
    {
      name: 'KMVQ',
      description: 'San Francisco top 40',
      url: 'https://14623.live.streamtheworld.com/KMVQFMAAC_SC',
    },
  ],
  videos: [
    {
      url: 'https://www.youtube.com/watch?v=l72z2l_1h9A',
      timeStart: 24,
      time: 'day',
      method: 'car',
    },
    {
      url: 'https://www.youtube.com/watch?v=jJ08h2cgWjI',
      timeStart: 20,
      time: 'night',
      method: 'car',
    },
    {
      url: 'https://www.youtube.com/watch?v=cKblUp_8Kyo',
      timeStart: 6,
      time: 'night',
      method: 'walk',
    },
    {
      url: 'https://www.youtube.com/watch?v=2PmxKfKX9iA',
      timeStart: 150,
      time: 'day',
      method: 'walk',
    },
    {
      url: 'https://www.youtube.com/watch?v=22YoWFhkteY',
      timeStart: 74,
      time: 'day',
      method: 'train',
    },
    {
      url: 'https://www.youtube.com/watch?v=rX7NIFqLwso',
      timeStart: 49,
      time: 'day',
      method: 'train',
    },
    {
      url: 'https://www.youtube.com/watch?v=3Lqgd2Y9zdQ',
      timeStart: 138,
      time: 'night',
      method: 'train',
    },
  ],
};
