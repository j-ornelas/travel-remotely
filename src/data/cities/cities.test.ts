import '@testing-library/react';

import { requiredMethods, times } from '../variables';
import { cities } from '../cities';

test('each city contains at least 1 of each required method', () => {
  let meetsStandards = true;
  cities.forEach(city => {
    requiredMethods.forEach(method => {
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
    requiredMethods.forEach(method => {
      const methodFilter = city.videos.filter(video => video.method === method);
      times.forEach(time => {
        const timeFilter = methodFilter.filter(video => video.time === time);
        if (timeFilter.length === 0) meetsStandards = false;
      });
    });
  });
  expect(meetsStandards).toBe(true);
});

test('each city contains at least 3 radio stations', () => {
  let meetsStandards = true;
  cities.forEach(city => {
    if (city.radio.length <= 2) meetsStandards = false;
  });
  expect(meetsStandards).toBe(true);
});
