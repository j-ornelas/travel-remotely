import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

import { cities } from '../../data/cities';

const StyledVideo = styled.div({
  height: '100vh',
  width: '100vw',
  pointerEvents: 'none',
  position: 'relative',
});

export const Videobackground = () => {
  const [currentCity, setCurrentCity] = useState(cities[0]);
  const [isVideoMuted, setVideoMuted] = useState(true);
  const currentVideo = currentCity.videos[0];
  console.log('set currentCity', setCurrentCity, setVideoMuted, isVideoMuted);
  console.log('CURRENT video', currentVideo);
  return (
    <StyledVideo>
      <ReactPlayer
        url={currentVideo.url}
        controls={false}
        height="100vh"
        width="100vw"
        muted={true}
        playing={true}
        config={{ youtube: { playerVars: { disablekb: 1, showinfo: 0 } } }}
      />
    </StyledVideo>
  );
};
