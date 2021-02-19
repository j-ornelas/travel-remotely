import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';

import Controls from '../Controls';
import { cities } from '../../data/cities';
import { Video } from '../../data/dataTypes';
import { breakpoints } from '../../utils/variables';
import { useWindowSize } from '../../utils/useWindowSize';
import { getRandomFromList } from '../../utils/getRandomFromList';

export interface VideoOptions {
  time: string;
  method: any;
}
const _default_options: VideoOptions = {
  time: 'any', // any, day, night
  method: 'walk', // any, train, car, walk
};

const filterVideos = (videos: Video[], options: VideoOptions) => {
  const filteredVideos = videos.filter(video => {
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
  return filteredVideos.length ? filteredVideos : videos;
};

export const Videobackground = () => {
  const [currentCity, setCurrentCity] = useState(getRandomFromList(cities));
  const [streetVolume, setStreetVolume] = useState(0); // 0-100, 0: muted, 100: max volume;
  const [videoOptions, setVideoOptions] = useState<VideoOptions>(
    _default_options,
  );
  const [currentVideo, setCurrentVideo] = useState(
    // can give users option to set current video by url?
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
    setCurrentCity(targetCity);
  };
  useEffect(() => {
    setCurrentVideo(
      getRandomFromList(filterVideos(currentCity.videos, videoOptions)),
    );
  }, [videoOptions]);
  const width = useWindowSize().width;
  const isMobile = width ? width < breakpoints.tablet : false;
  return (
    <StyledVideo>
      <VideoContainer>
        <ReactPlayer
          url={currentVideo.url}
          controls={false}
          height={!isMobile ? '115%' : '275%'}
          width={!isMobile ? '115%' : '275%'}
          muted={streetVolume === 0}
          volume={streetVolume / 100}
          playing={true}
          style={{
            position: 'absolute',
            top: !isMobile ? -57 : -580,
            left: !isMobile ? -120 : -420,
            overflow: 'hidden',
            transform: !isMobile ? 'rotate(0deg)' : 'rotate(90deg)',
          }}
          config={{
            youtube: {
              playerVars: {
                disablekb: 1,
                showinfo: 0,
                start: currentVideo.timeStart,
              },
            },
          }}
          onEnded={() =>
            setCurrentVideo(
              getRandomFromList(filterVideos(currentCity.videos, videoOptions)),
            )
          }
        />
      </VideoContainer>
      <Controls
        options={videoOptions}
        updateOptions={updateOptionsByProp}
        updateCity={updateCityByName}
        currentCity={currentCity}
        currentVideo={currentVideo}
        streetVolume={streetVolume}
        setStreetVolume={setStreetVolume}
      />
    </StyledVideo>
  );
};

const StyledVideo = styled.div`
  height: 100vh;
  overflow: hidden;
`;
const VideoContainer = styled.div`
  pointer-events: none;
  position: relative;
  overflow: 'hidden';
  height: 100%;
`;
