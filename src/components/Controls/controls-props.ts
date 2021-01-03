import { VideoOptions } from '../Videobackground/Videobackground';
import { City, Video } from '../../data/dataTypes';

export interface ControlsProps {
  options: VideoOptions;
  updateCity: Function;
  updateOptions: Function;
  currentCity: City;
  currentVideo: Video;
  isMuted: boolean;
  setIsMuted: Function;
}
