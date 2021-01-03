import React, { useState } from 'react';
import styled from '@emotion/styled';
import AudioPlayer from 'react-h5-audio-player';
import './audioplayer.css';

import { cities } from '../../data/cities';
import { colors } from '../../data/variables';
import { RadioStation } from '../../data/dataTypes';
import { getRandomFromList } from '../../utils/getRandomFromList';
import { ControlsProps } from './controls-props';

export const Controls = ({
  currentCity,
  options,
  updateCity,
  updateOptions,
}: ControlsProps) => {
  const [currentStation, setCurrentStation] = useState<RadioStation>(
    getRandomFromList(currentCity.radio),
  );
  return (
    <StyledControls>
      <div>
        <Header>CITIES:</Header>
        {cities.map(city => (
          <Option
            isSelected={currentCity.name === city.name}
            onClick={() => updateCity(city.name)}
          >
            {city.name}
          </Option>
        ))}
        <Header>RADIO STATIONS:</Header>
        {currentCity.radio.map(station => (
          <Option
            isSelected={station.name === currentStation.name}
            onClick={() => setCurrentStation(station)}
          >
            <Subheader>{station.name}</Subheader>
            <div>{station.description}</div>
          </Option>
        ))}
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
    </StyledControls>
  );
};

const StyledControls = styled.div({
  border: `1px solid ${colors.light02}`,
  width: '500px',
  borderRadius: '6px',
  padding: '8px',
  paddingBottom: 0,
  position: 'absolute',
  bottom: 45,
  right: 45,
  backgroundColor: colors.darker07,
  color: 'white',
});
const Option = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${colors.light02};
  background-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? colors.light03 : 'inherit'};
  :hover {
    cursor: pointer;
  }
  :last-of-type {
    border: none;
  }
`;
const Header = styled.div({
  fontSize: '18px',
  fontWeight: 'bold',
  paddingTop: '8px',
  paddingBottom: '8px',
  color: colors.primary,
});
const Subheader = styled.div({
  fontWeight: 'bold',
  paddingBottom: '4px',
  paddingTop: '4px',
});
const RadioContainer = styled.div({
  display: 'flex',
});
const RadioOption = styled.div({
  width: '25%',
});
