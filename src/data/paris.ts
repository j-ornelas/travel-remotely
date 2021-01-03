import { City } from './dataTypes';

export const paris: City = {
  name: 'Paris',
  radio: [
    {
      url: 'https://sweetfm-lemans.ice.infomaniak.ch/sweetfm-lemans-192.mp3',
      name: 'Sweet FM',
      description: 'Dance, Electro',
    },
    {
      url: 'https://icecast.radiofrance.fr/fb1071-midfi.mp3?ID=pd569ib97j',
      name: 'France Bleu Paris',
      description: 'Hits, Pop',
    },
    {
      url: 'https://stream.ouifm.fr/ouifm-high.mp3?ID=webplayer',
      name: 'Oui FM',
      description: 'Rock',
    },
    {
      url:
        'https://icecast.funradio.fr/fun-1-44-128?listen=wEbAwQMBgULAAQFAg8PBAEDBQ',
      name: 'Fun Radio',
      description: 'Dance',
    },
    {
      url: 'https://rfimonde64k.ice.infomaniak.ch/rfimonde-64.mp3',
      name: 'RFI',
      description: 'World, News',
    },
  ],
  videos: [
    {
      url: 'https://www.youtube.com/watch?v=cxfyJvqVgMc',
      method: 'train',
      time: 'day',
      timeStart: 120,
    },
    {
      url: 'https://www.youtube.com/watch?v=Ksya1BJtu4E',
      method: 'walk',
      time: 'day',
      timeStart: 40,
    },
    {
      url: 'https://www.youtube.com/watch?v=R5azO_SG87M',
      method: 'train',
      time: 'night',
      timeStart: 83,
    },
    {
      url: 'https://www.youtube.com/watch?v=FBjjYw-xcdg',
      method: 'car',
      time: 'day',
      timeStart: 12,
    },
    {
      url: 'https://www.youtube.com/watch?v=-lowFDVMf6c',
      method: 'car',
      time: 'night',
      timeStart: 7,
    },
    {
      url: 'https://www.youtube.com/watch?v=Ut84Anle7Pc',
      method: 'walk',
      time: 'day',
      timeStart: 14,
    },
    {
      url: 'https://www.youtube.com/watch?v=VIT-zhyiAoo',
      method: 'walk',
      time: 'day',
      timeStart: 12,
    },
    {
      url: 'https://www.youtube.com/watch?v=H0Pk2PGxEAo',
      method: 'walk',
      time: 'night',
      timeStart: 39,
    },
    {
      url: 'https://www.youtube.com/watch?v=jGoBrJycUxQ',
      method: 'walk',
      time: 'night',
      timeStart: 40,
    },
  ],
};
