import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

import { cities } from '../../data/cities';
import { Video } from '../../data/dataTypes';
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
  return (
    <StyledVideo>
      <VideoContainer>
        <ReactPlayer
          url={currentVideo.url}
          controls={false}
          height="115%"
          width="115%"
          muted={streetVolume === 0}
          volume={streetVolume / 100}
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
