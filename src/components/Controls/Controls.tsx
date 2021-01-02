import React from 'react';
import styled from '@emotion/styled';

import { cities } from '../../data/cities';
import { ControlsProps } from './controls-props';

export const Controls = ({
  currentCity,
  options,
  updateCity,
  updateOptions,
}: ControlsProps) => {
  return (
    <StyledControls>
      <div>
        <div>CITIES</div>
        {cities.map(city => (
          <Option
            isSelected={currentCity.name === city.name}
            onClick={() => updateCity(city.name)}
          >
            {city.name}
          </Option>
        ))}
        <div>OPTIONS:</div>
        <div>Time:</div>
        <Option
          isSelected={options.time === 'day'}
          onClick={() => updateOptions('time', 'day')}
        >
          day
        </Option>
        <Option
          isSelected={options.time === 'night'}
          onClick={() => updateOptions('time', 'night')}
        >
          night
        </Option>
        <Option
          isSelected={options.time === 'any'}
          onClick={() => updateOptions('time', 'any')}
        >
          any
        </Option>
        <div>Method:</div>
        <Option
          isSelected={options.method === 'car'}
          onClick={() => updateOptions('method', 'car')}
        >
          car
        </Option>
        <Option
          isSelected={options.method === 'walk'}
          onClick={() => updateOptions('method', 'walk')}
        >
          walk
        </Option>
        <Option
          isSelected={options.method === 'train'}
          onClick={() => updateOptions('method', 'train')}
        >
          train
        </Option>
        <Option
          isSelected={options.method === 'any'}
          onClick={() => updateOptions('method', 'any')}
        >
          any
        </Option>
      </div>
    </StyledControls>
  );
};

const StyledControls = styled.div({
  border: '2px solid yellow',
  width: '200px',
  height: '300px',
  position: 'absolute',
  bottom: 45,
  right: 45,
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: 'white',
});
const Option = styled.div`
  border: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? '1px solid yellow' : 'none'};
`;
