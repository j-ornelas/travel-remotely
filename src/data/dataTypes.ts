export interface RadioStation {
  name: string;
  url: string;
  description?: string;
}
export interface Video {
  url: string;
  day?: boolean;
  night?: boolean;
  // time to start the video, in case there's an intro we need to skip.
  // in seconds = ex: '8' for 8 seconds
  timeStart: string;
}
export interface City {
  name: string;
  radio: RadioStation[];
  videos: {
    walk: Video[];
    car: Video[];
    train: Video[];
  };
}
