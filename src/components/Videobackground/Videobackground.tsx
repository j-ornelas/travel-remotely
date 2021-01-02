import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

import { cities } from '../../data/cities';
import Controls from '../Controls';

const StyledVideo = styled.div({
  height: '100vh', // TODO: remove
  width: '100vw',
  position: 'relative',
});
const VideoContainer = styled.div({
  pointerEvents: 'none', // TODO: we may remove this once we hide share/more
});

export interface VideoOptions {
  time: string;
  method: any;
}
const _default_options: VideoOptions = {
  time: 'any', // any, day, night
  method: 'any', // any, train, car, walk
};

export const Videobackground = () => {
  const [currentCity, setCurrentCity] = useState(cities[0]);
  const [isVideoMuted, setVideoMuted] = useState(true);
  const [videoOptions, setVideoOptions] = useState<VideoOptions>(
    _default_options,
  );
  const updateOptionsByProp = (prop: string, value: string) => {
    return setVideoOptions({
      ...videoOptions,
      [prop]: value,
    });
  };
  const updateCityByName = (target: string) => {
    const targetCity = cities.filter(city => city.name === target);
    return setCurrentCity(targetCity[0]);
  };
  // TODO: find random video that fits city / options params.
  const filteredVideos = currentCity.videos.filter(video => {
    let timeFlag = true;
    let methodFlag = true;
    if (videoOptions.time !== 'any') {
      timeFlag = videoOptions.time === video.time;
    }
    if (videoOptions.method !== 'any') {
      methodFlag = videoOptions.method === video.method;
    }
    return timeFlag && methodFlag;
  });
  const currentVideo =
    filteredVideos[Math.floor(Math.random() * filteredVideos.length)];
  return (
    <StyledVideo>
      <VideoContainer>
        <ReactPlayer
          url={currentVideo.url}
          controls={false}
          height="100vh"
          width="100vw"
          muted={true}
          playing={true}
          config={{ youtube: { playerVars: { disablekb: 1, showinfo: 0 } } }}
        />
      </VideoContainer>
      <Controls
        options={videoOptions}
        updateOptions={updateOptionsByProp}
        updateCity={updateCityByName}
        currentCity={currentCity}
      />
    </StyledVideo>
  );
};
