import type { IRenderable } from '@sudobility/genui';

export const controlsData: IRenderable[] = [
  {
    id: 'demo-toggle-dark',
    view: {
      layout: 'line_toggle',
      title: { text: 'Dark Mode' },
      valueText: { text: 'false' },
    },
    destination: { value: 'dark-mode' },
  },
  {
    id: 'demo-toggle-notifications',
    view: {
      layout: 'line_toggle',
      title: { text: 'Notifications' },
      subtitle: { text: 'Receive push notifications' },
      valueText: { text: 'true' },
    },
    destination: { value: 'notifications' },
  },
  {
    id: 'demo-slider-volume',
    view: {
      layout: 'line_slider',
      title: { text: 'Volume' },
      valueText: { text: '50' },
    },
    destination: { value: 'volume' },
  },
  {
    id: 'demo-slider-brightness',
    view: {
      layout: 'line_slider',
      title: { text: 'Brightness' },
      valueText: { text: '75' },
    },
    destination: { value: 'brightness' },
  },
  {
    id: 'demo-select-language',
    view: {
      layout: 'line_select',
      title: { text: 'Language' },
      valueText: { text: 'English' },
      children: [
        { id: 'lang-en', view: { title: { text: 'English' } }, destination: { value: 'en' } },
        { id: 'lang-es', view: { title: { text: 'Spanish' } }, destination: { value: 'es' } },
        { id: 'lang-fr', view: { title: { text: 'French' } }, destination: { value: 'fr' } },
      ],
    },
    destination: { value: 'language' },
  },
  {
    id: 'demo-select-priority',
    view: {
      layout: 'line_select',
      title: { text: 'Priority' },
      valueText: { text: 'Normal' },
      children: [
        { id: 'pri-low', view: { title: { text: 'Low' } }, destination: { value: 'low' } },
        {
          id: 'pri-normal',
          view: { title: { text: 'Normal' } },
          destination: { value: 'normal' },
        },
        { id: 'pri-high', view: { title: { text: 'High' } }, destination: { value: 'high' } },
      ],
    },
    destination: { value: 'priority' },
  },
];
