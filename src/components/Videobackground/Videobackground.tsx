import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

import { cities } from '../../data/cities';
import Controls from '../Controls';
import { getRandomFromList } from '../../utils/getRandomFromList';

export interface VideoOptions {
  time: string;
  method: any;
}
const _default_options: VideoOptions = {
  time: 'any', // any, day, night
  method: 'walk', // any, train, car, walk
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
  const currentVideo = getRandomFromList(filteredVideos);
  return (
    <StyledVideo>
      <VideoContainer>
        <ReactPlayer
          url={currentVideo.url}
          controls={false}
          height="115%"
          width="115%"
          muted={true}
          playing={true}
          style={{
            height: '120%',
            width: '110%',
            position: 'absolute',
            top: -57,
            left: -120,
            overflow: 'hidden',
          }}
          config={{
            youtube: {
              playerVars: {
                disablekb: 1,
                showinfo: 0,
                start: currentVideo.timeStart,
              },
            },
            file: {
              attributes: {
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  overflow: 'hidden',
                },
              },
            },
          }}
        />
      </VideoContainer>
      <Controls
        options={videoOptions}
        updateOptions={updateOptionsByProp}
        updateCity={updateCityByName}
        currentCity={currentCity}
        currentVideo={currentVideo}
      />
    </StyledVideo>
  );
};

const StyledVideo = styled.div({
  height: '100vh',
  overflow: 'hidden',
});
const VideoContainer = styled.div({
  pointerEvents: 'none', // TODO: we may remove this once we hide share/more    position: "relative",
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
});
