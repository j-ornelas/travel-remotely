import '@testing-library/react';

import { methods, times } from './variables';
import { cities } from './cities';

test('each city contains at least 1 of each method', () => {
  let meetsStandards = true;
  cities.forEach(city => {
    methods.forEach(method => {
      const filteredVideos = city.videos.filter(
        video => video.method === method,
      );
      if (!filteredVideos.length) meetsStandards = false;
    });
  });
  expect(meetsStandards).toBe(true);
});

test('each city contains at least 1 of each time', () => {
  let meetsStandards = true;
  cities.forEach(city => {
    times.forEach(time => {
      const filteredVideos = city.videos.filter(video => video.time === time);
      if (!filteredVideos.length) meetsStandards = false;
    });
  });
  expect(meetsStandards).toBe(true);
});

test('each method has at least 1 time', () => {
  let meetsStandards = true;
  cities.forEach(city => {
    methods.forEach(method => {
      const methodFilter = city.videos.filter(video => video.method === method);
      times.forEach(time => {
        const timeFilter = methodFilter.filter(video => video.time === time);
        if (timeFilter.length === 0) meetsStandards = false;
      });
    });
  });
  expect(meetsStandards).toBe(true);
});
