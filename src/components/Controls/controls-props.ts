import { VideoOptions } from '../Videobackground/Videobackground';
import { City } from '../../data/dataTypes';

export interface ControlsProps {
  options: VideoOptions;
  updateCity: Function;
  updateOptions: Function;
  currentCity: City;
}
