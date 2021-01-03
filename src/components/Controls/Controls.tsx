import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import AudioPlayer from 'react-h5-audio-player';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
}: ControlsProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStation, setCurrentStation] = useState<RadioStation>(
    getRandomFromList(currentCity.radio),
  );
  useEffect(() => {
    setCurrentStation(currentCity.radio[0]);
  }, [currentCity]);
  return isVisible ? (
    <StyledControls>
      <div>
        <Header>CITIES:</Header>
        <Scrollable>
          {cities.map(city => (
            <Option
              isSelected={currentCity.name === city.name}
              onClick={() => updateCity(city.name)}
            >
              <Subheader>{city.name}</Subheader>
            </Option>
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
        <RadioContainer
          onChange={(e: any) => updateOptions('streetNoise', e.target.value)}
        >
          <RadioOption>
            <input
              type="radio"
              value="on"
              name="streetNoise"
              checked={options.streetNoise === 'on'}
            />
            On
          </RadioOption>
          <RadioOption>
            <input
              type="radio"
              value="off"
              name="streetNoise"
              checked={options.streetNoise === 'off'}
            />
            Off
          </RadioOption>
        </RadioContainer>
      </div>
      <AudioPlayer
        src={currentStation.url}
        autoPlay={true}
        showSkipControls={false}
        showJumpControls={false}
        showDownloadProgress={false}
        showFilledProgress={false}
        autoPlayAfterSrcChange={true}
      />
      <LinkRow>
        <a href="https://www.buymeacoffee.com/johnornelas" target="_blank">
          <CoffeeButton
            src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
            alt="Buy Me A Coffee"
          />
        </a>
        <a href={currentVideo.url} target="_blank">
          original video
        </a>
        <VisibilityContainer
          isVisible={isVisible}
          onClick={() => setIsVisible(false)}
        >
          <VisibilityOff />
        </VisibilityContainer>
      </LinkRow>
    </StyledControls>
  ) : (
    <HiddenContainer>
      <VisibilityContainer
        onClick={() => setIsVisible(true)}
        isVisible={isVisible}
      >
        <Visibility />
      </VisibilityContainer>
    </HiddenContainer>
  );
};

const StyledControls = styled.div({
  border: `1px solid ${colors.light02}`,
  width: '375px',
  borderRadius: '6px',
  padding: '8px',
  paddingBottom: 0,
  position: 'absolute',
  bottom: 32,
  right: 32,
  backgroundColor: colors.darker07,
  color: colors.lighter,
});
const HiddenContainer = styled.div({
  position: 'absolute',
  bottom: 43,
  right: 33,
  padding: '0 8px 0 0',
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
  paddingTop: '4px',
  paddingBottom: '4px',
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
