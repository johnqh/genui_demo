import type { IRenderable } from '@sudobility/genui';

export const mapsData: IRenderable[] = [
  {
    id: 'demo-map-pin',
    location: { lat: 37.7749, long: -122.4194 },
    view: {
      layout: 'map_pin',
      title: { text: 'San Francisco' },
      subtitle: { text: 'The Golden Gate City' },
    },
  },
  {
    id: 'demo-map-pin-tokyo',
    location: { lat: 35.6762, long: 139.6503 },
    view: {
      layout: 'map_pin',
      title: { text: 'Tokyo Tower' },
      subtitle: { text: 'Iconic landmark in Minato, Tokyo' },
      details: { text: 'Height: 333 meters' },
    },
  },
  {
    id: 'demo-map',
    view: {
      layout: 'map',
      title: { text: 'West Coast Cities' },
      children: [
        {
          id: 'map-sf',
          location: { lat: 37.7749, long: -122.4194 },
          view: {
            title: { text: 'San Francisco' },
            subtitle: { text: 'Population: 874k' },
          },
          destination: { value: 'san-francisco' },
        },
        {
          id: 'map-la',
          location: { lat: 34.0522, long: -118.2437 },
          view: {
            title: { text: 'Los Angeles' },
            subtitle: { text: 'Population: 3.9M' },
          },
          destination: { value: 'los-angeles' },
        },
        {
          id: 'map-sea',
          location: { lat: 47.6062, long: -122.3321 },
          view: {
            title: { text: 'Seattle' },
            subtitle: { text: 'Population: 737k' },
          },
          destination: { value: 'seattle' },
        },
        {
          id: 'map-pdx',
          location: { lat: 45.5051, long: -122.675 },
          view: {
            title: { text: 'Portland' },
            subtitle: { text: 'Population: 652k' },
          },
          destination: { value: 'portland' },
        },
        {
          id: 'map-sd',
          location: { lat: 32.7157, long: -117.1611 },
          view: {
            title: { text: 'San Diego' },
            subtitle: { text: 'Population: 1.4M' },
          },
          destination: { value: 'san-diego' },
        },
      ],
    },
  },
  {
    id: 'demo-map-europe',
    view: {
      layout: 'map',
      title: { text: 'European Capitals' },
      children: [
        {
          id: 'map-london',
          location: { lat: 51.5074, long: -0.1278 },
          view: { title: { text: 'London' } },
          destination: { value: 'london' },
        },
        {
          id: 'map-paris',
          location: { lat: 48.8566, long: 2.3522 },
          view: { title: { text: 'Paris' } },
          destination: { value: 'paris' },
        },
        {
          id: 'map-berlin',
          location: { lat: 52.52, long: 13.405 },
          view: { title: { text: 'Berlin' } },
          destination: { value: 'berlin' },
        },
        {
          id: 'map-rome',
          location: { lat: 41.9028, long: 12.4964 },
          view: { title: { text: 'Rome' } },
          destination: { value: 'rome' },
        },
        {
          id: 'map-madrid',
          location: { lat: 40.4168, long: -3.7038 },
          view: { title: { text: 'Madrid' } },
          destination: { value: 'madrid' },
        },
      ],
    },
  },
];
