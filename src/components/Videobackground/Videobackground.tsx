import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

import { cities } from '../../data/cities';
import { Video } from '../../data/dataTypes';
import Controls from '../Controls';
import { getRandomFromList } from '../../utils/getRandomFromList';

export interface VideoOptions {
  time: string;
  method: any;
  streetNoise: string;
}
const _default_options: VideoOptions = {
  time: 'any', // any, day, night
  method: 'walk', // any, train, car, walk
  streetNoise: 'off', // ambient street noise - off/on
};

const filterVideos = (videos: Video[], options: VideoOptions) => {
  return videos.filter(video => {
    let timeFlag = true;
    let methodFlag = true;
    if (options.time !== 'any') {
      timeFlag = options.time === video.time;
    }
    if (options.method !== 'any') {
      methodFlag = options.method === video.method;
    }
    return timeFlag && methodFlag;
  });
};

export const Videobackground = () => {
  const [currentCity, setCurrentCity] = useState(cities[0]);
  const [videoOptions, setVideoOptions] = useState<VideoOptions>(
    _default_options,
  );
  const [currentVideo, setCurrentVideo] = useState(
    // can give users option to set current video?
    getRandomFromList(filterVideos(currentCity.videos, videoOptions)),
  );
  const updateOptionsByProp = (prop: string, value: string) => {
    return setVideoOptions({
      ...videoOptions,
      [prop]: value,
    });
  };
  const updateCityByName = (target: string) => {
    const targetCity = cities.filter(city => city.name === target)[0];
    setCurrentVideo(
      getRandomFromList(filterVideos(targetCity.videos, videoOptions)),
    );
    return setCurrentCity(targetCity);
  };
  return (
    <StyledVideo>
      <VideoContainer>
        <ReactPlayer
          url={currentVideo.url}
          controls={false}
          height="115%"
          width="115%"
          muted={videoOptions.streetNoise === 'off'}
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
