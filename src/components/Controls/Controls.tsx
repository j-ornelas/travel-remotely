import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import AudioPlayer from 'react-h5-audio-player';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Refresh from '@material-ui/icons/Refresh';
import MarqueeText from 'react-marquee-text-component';
import './audioplayer.css';

import { cities } from '../../data/cities';
import { colors } from '../../data/variables';
import { RadioStation } from '../../data/dataTypes';
import { getRandomFromList } from '../../utils/getRandomFromList';
import { ControlsProps } from './controls-props';

export const Controls = ({
  currentCity,
  currentVideo,
  options,
  updateCity,
  updateOptions,
  streetVolume,
  setStreetVolume,
}: ControlsProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStation, setCurrentStation] = useState<RadioStation>(
    getRandomFromList(currentCity.radio),
  );
  const _default_audio_status = '......Loading......';
  const [audioStatus, setAudioStatus] = useState(_default_audio_status);
  useEffect(() => {
    // change radio when current city is changed
    setCurrentStation(currentCity.radio[0]);
  }, [currentCity]);
  useEffect(() => {
    // reset radio status when radio station is changed
    setAudioStatus(_default_audio_status);
  }, [currentStation]);
  return (
    <StyledControls>
      <HidableContent isVisible={isVisible}>
        <Header>CITIES:</Header>
        <Scrollable>
          {cities.map(city => (
            <OptionRow
              isSelected={currentCity.name === city.name}
              onClick={() => updateCity(city.name)}
            >
              <Subheader>{city.name}</Subheader>
              {city.name === currentCity.name && <Refresh />}
            </OptionRow>
          ))}
        </Scrollable>
        <Header>RADIO STATIONS:</Header>
        <Scrollable>
          {currentCity.radio.map(station => (
            <Option
              isSelected={station.name === currentStation.name}
              onClick={() => setCurrentStation(station)}
            >
              <Subheader>{station.name}</Subheader>
              <div>{station.description}</div>
            </Option>
          ))}
        </Scrollable>
        <Header>OPTIONS:</Header>
        <Subheader>Method:</Subheader>
        <RadioContainer
          onChange={(e: any) => updateOptions('method', e.target.value)}
        >
          <RadioOption>
            <input
              type="radio"
              value="walk"
              name="method"
              checked={options.method === 'walk'}
            />
            Walk
          </RadioOption>
          <RadioOption>
            <input
              type="radio"
              value="car"
              name="method"
              checked={options.method === 'car'}
            />
            Car
          </RadioOption>
          <RadioOption>
            <input
              type="radio"
              value="train"
              name="method"
              checked={options.method === 'train'}
            />
            Train
          </RadioOption>
          <RadioOption>
            <input
              type="radio"
              value="any"
              name="method"
              checked={options.method === 'any'}
            />
            Any
          </RadioOption>
        </RadioContainer>
        <Subheader>Time:</Subheader>
        <RadioContainer
          onChange={(e: any) => updateOptions('time', e.target.value)}
        >
          <RadioOption>
            <input
              type="radio"
              value="day"
              name="time"
              checked={options.time === 'day'}
            />
            Day
          </RadioOption>
          <RadioOption>
            <input
              type="radio"
              value="night"
              name="time"
              checked={options.time === 'night'}
            />
            Night
          </RadioOption>
          <RadioOption>
            <input
              type="radio"
              value="any"
              name="time"
              checked={options.time === 'any'}
            />
            Any
          </RadioOption>
        </RadioContainer>
        <Subheader>Street Noise:</Subheader>
        <RadioContainer onChange={(e: any) => setStreetVolume(e.target.value)}>
          <RadioOption>
            <input
              type="radio"
              value={0}
              name="streetNoise"
              checked={streetVolume.toString() === '0'}
            />
            Off
          </RadioOption>
          <RadioOption>
            <input
              type="radio"
              value={33}
              name="streetNoise"
              checked={streetVolume.toString() === '33'}
            />
            Quiet
          </RadioOption>
          <RadioOption>
            <input
              type="radio"
              value={66}
              name="streetNoise"
              checked={streetVolume.toString() === '66'}
            />
            Medium
          </RadioOption>
          <RadioOption>
            <input
              type="radio"
              value={100}
              name="streetNoise"
              checked={streetVolume.toString() === '100'}
            />
            Loudest
          </RadioOption>
        </RadioContainer>
        <LinkRow>
          <a
            href="https://www.buymeacoffee.com/johnornelas"
            target="_blank"
            rel="noreferrer"
          >
            <CoffeeButton
              src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
              alt="Buy Me A Coffee"
            />
          </a>
          <a href={currentVideo.url} target="_blank" rel="noreferrer">
            original video
          </a>
        </LinkRow>
      </HidableContent>
      <LinkRow>
        <AudioPlayer
          src={currentStation.url}
          autoPlay={true}
          showSkipControls={false}
          showJumpControls={false}
          showDownloadProgress={false}
          showFilledProgress={false}
          autoPlayAfterSrcChange={true}
          onError={error =>
            setAudioStatus(
              `.......An audio error has occured: ${JSON.stringify(error)}`,
            )
          }
          onPlayError={error =>
            setAudioStatus(
              `.......An audio error has occured: ${JSON.stringify(error)}`,
            )
          }
          onCanPlay={() =>
            setAudioStatus(
              `.....Now Playing: ${currentStation.name} - ${currentStation.description}`,
            )
          }
        />
        <StatusContainer>
          <MarqueeText text={audioStatus} />
        </StatusContainer>
        <VisibilityContainer
          isVisible={isVisible}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <VisibilityOff /> : <Visibility />}
        </VisibilityContainer>
      </LinkRow>
    </StyledControls>
  );
};

const StyledControls = styled.div({
  border: `1px solid ${colors.light02}`,
  width: '375px',
  borderRadius: '6px',
  padding: '8px',
  position: 'absolute',
  bottom: 32,
  right: 32,
  backgroundColor: colors.darker07,
  color: colors.lighter,
  opacity: 0.6,
  ':hover': {
    opacity: '1',
  },
  transition: 'opacity 0.3s ease-in-out',
});
const Option = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${colors.light02};
  background-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? colors.light03 : 'inherit'};
  :hover {
    cursor: pointer;
  }
  &:last-of-type {
    border-bottom: none;
  }
`;
const OptionRow = styled(Option)({
  display: 'flex',
  alignItems: 'center',
});
const Header = styled.div({
  fontSize: '14px',
  fontWeight: 'bold',
  paddingTop: '4px',
  paddingBottom: '4px',
  color: colors.primary,
});
const Subheader = styled.div({
  fontWeight: 'bold',
  paddingBottom: '2px',
  paddingTop: '2px',
  paddingRight: '8px',
});
const RadioContainer = styled.div({
  display: 'flex',
  padding: '4px',
});
const RadioOption = styled.div({
  width: '25%',
});
const LinkRow = styled.div({
  display: 'flex',
  paddingTop: '8px',
  paddingBottom: '8px',
  color: `${colors.lighter01} !important`,
  'a:link': {
    color: colors.lighter09,
  },
  'a:visited': {
    color: colors.primary09,
  },
  justifyContent: 'space-between',
  alignItems: 'center',
});
const CoffeeButton = styled.img({
  height: '35px',
  width: '126.6px',
});
const VisibilityContainer = styled.div`
  color: ${({ isVisible }: { isVisible: boolean }) =>
    isVisible ? colors.light09 : colors.light07};
  paddingtop: 4px;
`;
const Scrollable = styled.div({
  maxHeight: '160px',
  overflowY: 'scroll',
});
const HidableContent = styled.div`
  display: ${({ isVisible }: { isVisible: boolean }) =>
    isVisible ? 'inherit' : 'none'};
`;
const StatusContainer = styled.div({
  width: '50%',
  padding: '0 4px',
  color: colors.light06,
});
