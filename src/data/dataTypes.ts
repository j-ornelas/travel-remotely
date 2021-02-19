export interface RadioStation {
  name: string;
  url: string;
  description?: string;
}
export interface Video {
  url: string;
  // time to start the video, in case there's an intro we need to skip.
  // in seconds = ex: 8 for 8 seconds
  timeStart: number;
  method: string; // walk, train, car
  time: string; // day, night (time of dayvideo takes place)
}
export interface City {
  dateAdded?: string;
  name: string;
  radio: RadioStation[];
  videos: Video[];
}
