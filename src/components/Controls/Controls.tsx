import React, { useState } from 'react';
import styled from '@emotion/styled';

import { cities } from '../../data/cities';

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
export const Controls = () => {
  return (
    <StyledControls>
      <div>
        {cities.map(city => (
          <div>{city.name}</div>
        ))}
      </div>
    </StyledControls>
  );
};
