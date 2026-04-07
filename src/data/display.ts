import type { IRenderable } from '@sudobility/genui';

export const displayData: IRenderable[] = [
  {
    id: 'demo-line-title',
    view: { layout: 'line_title', title: { text: 'Welcome' } },
  },
  {
    id: 'demo-line-text',
    view: { layout: 'line_text', title: { text: 'Status: Active' } },
  },
  {
    id: 'demo-line-title-value',
    view: {
      layout: 'line_title_value',
      title: { text: 'Total' },
      valueText: { text: '$99.99' },
    },
  },
  {
    id: 'demo-line-title-subtitle',
    view: {
      layout: 'line_title_subtitle',
      title: { text: 'John Doe' },
      subtitle: { text: 'Software Engineer' },
    },
  },
  {
    id: 'demo-line-title-subtitle-value',
    view: {
      layout: 'line_title_subtitle_value',
      title: { text: 'Invoice #1234' },
      subtitle: { text: 'Due: Jan 15, 2025' },
      valueText: { text: '$250.00' },
    },
  },
  {
    id: 'demo-line-title-detail',
    view: {
      layout: 'line_title_detail',
      title: { text: 'Meeting' },
      details: { text: 'Conference Room B, 2:00 PM - 3:00 PM' },
    },
  },
  {
    id: 'demo-line-image-title',
    view: {
      layout: 'line_image_title',
      title: { text: 'Alice Johnson' },
      image: { url: 'https://i.pravatar.cc/40?img=5' },
    },
  },
  {
    id: 'demo-line-image-title-subtitle',
    view: {
      layout: 'line_image_title_subtitle',
      title: { text: 'Bob Smith' },
      subtitle: { text: 'Product Manager' },
      image: { url: 'https://i.pravatar.cc/40?img=8' },
    },
  },
  {
    id: 'demo-line-image-title-subtitle-value',
    view: {
      layout: 'line_image_title_subtitle_value',
      title: { text: 'Wireless Headphones' },
      subtitle: { text: 'Electronics' },
      valueText: { text: '$59.99' },
      image: { url: 'https://picsum.photos/seed/headphones/40/40' },
    },
  },
  {
    id: 'demo-paragraph',
    view: {
      layout: 'paragraph',
      title: { text: 'About GenUI' },
      details: {
        text: 'GenUI is a React library that renders Kotlin-style renderable trees in TypeScript. It mirrors renderable payload shapes from Kotlin and focuses purely on rendering, reporting user interactions through an onAction callback.',
      },
    },
  },
  {
    id: 'demo-text-markup',
    view: {
      layout: 'text_markup',
      title: { text: 'Formatted Text' },
      details: {
        text: 'This demonstrates the text_markup layout which can render formatted or marked-up text content with rich styling support.',
      },
    },
  },
  {
    id: 'demo-center',
    view: {
      layout: 'center',
      title: { text: 'Centered Content' },
      subtitle: { text: 'This text is centered in its container' },
    },
  },
  {
    id: 'demo-center-image',
    view: {
      layout: 'center_image',
      title: { text: 'Logo' },
      image: { url: 'https://picsum.photos/seed/logo/120/120' },
    },
  },
  {
    id: 'demo-just-image',
    view: {
      layout: 'just_image',
      image: { url: 'https://picsum.photos/seed/banner/400/200' },
    },
  },
  {
    id: 'demo-embedded-image',
    view: {
      layout: 'embedded_image',
      title: { text: 'Mountain Vista' },
      subtitle: { text: 'A beautiful mountain landscape' },
      image: { url: 'https://picsum.photos/seed/vista/400/200' },
    },
  },
  {
    id: 'demo-footer',
    view: {
      layout: 'footer',
      title: { text: '2025 GenUI Demo. All rights reserved.' },
    },
  },
  {
    id: 'demo-waiting',
    view: {
      layout: 'waiting',
      title: { text: 'Loading data...' },
    },
  },
  {
    id: 'demo-web',
    view: {
      layout: 'web',
      url: { url: 'https://example.com' },
      modifier: { height: 200 },
    },
  },
];
