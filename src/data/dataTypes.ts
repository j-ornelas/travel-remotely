export interface RadioStation {
  name: string;
  url: string;
  description?: string;
}
export interface Video {
  url: string;
  // time to start the video, in case there's an intro we need to skip.
  // in seconds = ex: '8' for 8 seconds
  timeStart: string;
  method: string; // walk, train, car
  time: string; // day, night (time of dayvideo takes place)
}
export interface City {
  name: string;
  radio: RadioStation[];
  videos: Video[];
}
