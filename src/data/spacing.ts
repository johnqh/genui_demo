import type { IRenderable } from '@sudobility/genui';

export const spacingData: IRenderable[] = [
  {
    id: 'demo-spacer-horizontal-wrapper',
    view: {
      layout: 'stacked_horizontal',
      children: [
        {
          id: 'spacer-h-before',
          view: {
            layout: 'center',
            title: { text: 'Left' },
            modifier: { bgColor: 'SYSTEM_BLUE', width: 80, height: 40 },
          },
        },
        {
          id: 'demo-spacer-horizontal',
          view: {
            layout: 'spacer_horizontal',
            modifier: { width: 100 },
          },
        },
        {
          id: 'spacer-h-after',
          view: {
            layout: 'center',
            title: { text: 'Right' },
            modifier: { bgColor: 'SYSTEM_GREEN', width: 80, height: 40 },
          },
        },
      ],
    },
  },
  {
    id: 'demo-spacer-vertical-wrapper',
    view: {
      layout: 'stacked_vertical',
      children: [
        {
          id: 'spacer-v-before',
          view: {
            layout: 'center',
            title: { text: 'Top' },
            modifier: { bgColor: 'SYSTEM_ORANGE', height: 40 },
          },
        },
        {
          id: 'demo-spacer-vertical',
          view: {
            layout: 'spacer_vertical',
            modifier: { height: 32 },
          },
        },
        {
          id: 'spacer-v-after',
          view: {
            layout: 'center',
            title: { text: 'Bottom' },
            modifier: { bgColor: 'SYSTEM_PURPLE', height: 40 },
          },
        },
      ],
    },
  },
];
