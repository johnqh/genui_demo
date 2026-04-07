import type { IRenderable } from '@sudobility/genui';

export const collectionsData: IRenderable[] = [
  {
    id: 'demo-list',
    view: {
      layout: 'list',
      title: { text: 'Recent Files' },
      children: [
        {
          id: 'list-1',
          view: {
            layout: 'line_title_subtitle',
            title: { text: 'report.pdf' },
            subtitle: { text: 'Modified 2 hours ago' },
          },
        },
        {
          id: 'list-2',
          view: {
            layout: 'line_title_subtitle',
            title: { text: 'notes.md' },
            subtitle: { text: 'Modified yesterday' },
          },
        },
        {
          id: 'list-3',
          view: {
            layout: 'line_title_subtitle',
            title: { text: 'budget.xlsx' },
            subtitle: { text: 'Modified 3 days ago' },
          },
        },
      ],
    },
  },
  {
    id: 'demo-list-simple',
    view: {
      layout: 'list_simple',
      title: { text: 'Fruits' },
      children: [
        { id: 'fruit-1', view: { layout: 'line_title', title: { text: 'Apple' } } },
        { id: 'fruit-2', view: { layout: 'line_title', title: { text: 'Banana' } } },
        { id: 'fruit-3', view: { layout: 'line_title', title: { text: 'Cherry' } } },
        { id: 'fruit-4', view: { layout: 'line_title', title: { text: 'Date' } } },
      ],
    },
  },
  {
    id: 'demo-list-sectioned',
    view: {
      layout: 'list_sectioned',
      title: { text: 'Contacts' },
      children: [
        { id: 'contact-1', view: { layout: 'line_title', title: { text: 'Alice Johnson' } } },
        { id: 'contact-2', view: { layout: 'line_title', title: { text: 'Bob Smith' } } },
        { id: 'contact-3', view: { layout: 'line_title', title: { text: 'Charlie Brown' } } },
      ],
    },
  },
  {
    id: 'demo-list-paragraphs',
    view: {
      layout: 'list_paragraphs',
      title: { text: 'Release Notes' },
      children: [
        {
          id: 'para-1',
          view: {
            layout: 'paragraph',
            title: { text: 'v2.0 - Major Update' },
            details: { text: 'Redesigned dashboard with improved performance and new widgets.' },
          },
        },
        {
          id: 'para-2',
          view: {
            layout: 'paragraph',
            title: { text: 'v1.5 - Bug Fixes' },
            details: {
              text: 'Fixed login issues on Safari and improved error handling throughout.',
            },
          },
        },
      ],
    },
  },
  {
    id: 'demo-grid',
    view: {
      layout: 'grid',
      title: { text: 'Photo Gallery' },
      children: [
        {
          id: 'grid-1',
          view: {
            layout: 'embedded_image',
            title: { text: 'Mountain' },
            image: { url: 'https://picsum.photos/seed/mountain/200/200' },
          },
        },
        {
          id: 'grid-2',
          view: {
            layout: 'embedded_image',
            title: { text: 'Ocean' },
            image: { url: 'https://picsum.photos/seed/ocean/200/200' },
          },
        },
        {
          id: 'grid-3',
          view: {
            layout: 'embedded_image',
            title: { text: 'Forest' },
            image: { url: 'https://picsum.photos/seed/forest/200/200' },
          },
        },
        {
          id: 'grid-4',
          view: {
            layout: 'embedded_image',
            title: { text: 'Desert' },
            image: { url: 'https://picsum.photos/seed/desert/200/200' },
          },
        },
      ],
    },
  },
  {
    id: 'demo-grid-simple',
    view: {
      layout: 'grid_simple',
      title: { text: 'Colors' },
      children: [
        {
          id: 'color-1',
          view: { layout: 'tile', title: { text: 'Red' } },
          destination: { value: 'red' },
        },
        {
          id: 'color-2',
          view: { layout: 'tile', title: { text: 'Blue' } },
          destination: { value: 'blue' },
        },
        {
          id: 'color-3',
          view: { layout: 'tile', title: { text: 'Green' } },
          destination: { value: 'green' },
        },
        {
          id: 'color-4',
          view: { layout: 'tile', title: { text: 'Yellow' } },
          destination: { value: 'yellow' },
        },
      ],
    },
  },
  {
    id: 'demo-grid-sectioned',
    view: {
      layout: 'grid_sectioned',
      title: { text: 'Menu' },
      children: [
        {
          id: 'menu-1',
          view: { layout: 'tile', title: { text: 'Pizza' }, subtitle: { text: '$12' } },
          destination: { value: 'pizza' },
        },
        {
          id: 'menu-2',
          view: { layout: 'tile', title: { text: 'Burger' }, subtitle: { text: '$10' } },
          destination: { value: 'burger' },
        },
        {
          id: 'menu-3',
          view: { layout: 'tile', title: { text: 'Salad' }, subtitle: { text: '$8' } },
          destination: { value: 'salad' },
        },
      ],
    },
  },
  {
    id: 'demo-carousel',
    view: {
      layout: 'carousel',
      title: { text: 'Featured' },
      children: [
        {
          id: 'featured-1',
          view: {
            layout: 'tile',
            title: { text: 'Summer Sale' },
            subtitle: { text: 'Up to 50% off' },
          },
          destination: { value: 'summer-sale' },
        },
        {
          id: 'featured-2',
          view: {
            layout: 'tile',
            title: { text: 'New Arrivals' },
            subtitle: { text: 'Check out the latest' },
          },
          destination: { value: 'new-arrivals' },
        },
        {
          id: 'featured-3',
          view: {
            layout: 'tile',
            title: { text: 'Trending' },
            subtitle: { text: 'Most popular items' },
          },
          destination: { value: 'trending' },
        },
      ],
    },
  },
  {
    id: 'demo-stacked',
    view: {
      layout: 'stacked',
      children: [
        {
          id: 'stack-1',
          view: { layout: 'line_title', title: { text: 'Card A' } },
        },
        {
          id: 'stack-2',
          view: { layout: 'line_title', title: { text: 'Card B' } },
        },
      ],
    },
  },
  {
    id: 'demo-stacked-horizontal',
    view: {
      layout: 'stacked_horizontal',
      children: [
        {
          id: 'hstack-1',
          view: { layout: 'chip', title: { text: 'TypeScript' } },
          destination: { value: 'ts' },
        },
        {
          id: 'hstack-2',
          view: { layout: 'chip', title: { text: 'React' } },
          destination: { value: 'react' },
        },
        {
          id: 'hstack-3',
          view: { layout: 'chip', title: { text: 'Vite' } },
          destination: { value: 'vite' },
        },
      ],
    },
  },
  {
    id: 'demo-stacked-vertical',
    view: {
      layout: 'stacked_vertical',
      children: [
        {
          id: 'vstack-1',
          view: {
            layout: 'line_title_subtitle',
            title: { text: 'Step 1' },
            subtitle: { text: 'Create project' },
          },
        },
        {
          id: 'vstack-2',
          view: {
            layout: 'line_title_subtitle',
            title: { text: 'Step 2' },
            subtitle: { text: 'Install dependencies' },
          },
        },
        {
          id: 'vstack-3',
          view: {
            layout: 'line_title_subtitle',
            title: { text: 'Step 3' },
            subtitle: { text: 'Start coding' },
          },
        },
      ],
    },
  },
  {
    id: 'demo-stacked-dynamic',
    view: {
      layout: 'stacked_dynamic',
      children: [
        {
          id: 'dynamic-1',
          view: { layout: 'chip', title: { text: 'JavaScript' } },
          destination: { value: 'js' },
        },
        {
          id: 'dynamic-2',
          view: { layout: 'chip', title: { text: 'Python' } },
          destination: { value: 'py' },
        },
        {
          id: 'dynamic-3',
          view: { layout: 'chip', title: { text: 'Go' } },
          destination: { value: 'go' },
        },
        {
          id: 'dynamic-4',
          view: { layout: 'chip', title: { text: 'Rust' } },
          destination: { value: 'rust' },
        },
      ],
    },
  },
  {
    id: 'demo-tabs-fixed',
    view: {
      layout: 'tabs_fixed',
      children: [
        {
          id: 'tab-overview',
          view: { title: { text: 'Overview' }, layout: 'line_text', details: { text: 'This is the overview content panel.' } },
          destination: { value: 'overview' },
        },
        {
          id: 'tab-details',
          view: { title: { text: 'Details' }, layout: 'line_text', details: { text: 'This is the details content panel.' } },
          destination: { value: 'details' },
        },
        {
          id: 'tab-reviews',
          view: { title: { text: 'Reviews' }, layout: 'line_text', details: { text: 'This is the reviews content panel.' } },
          destination: { value: 'reviews' },
        },
      ],
    },
  },
  {
    id: 'demo-tabs-scrollable',
    view: {
      layout: 'tabs_scrollable',
      children: [
        {
          id: 'stab-1',
          view: { title: { text: 'All' } },
          destination: { value: 'all' },
        },
        {
          id: 'stab-2',
          view: { title: { text: 'Electronics' } },
          destination: { value: 'electronics' },
        },
        {
          id: 'stab-3',
          view: { title: { text: 'Clothing' } },
          destination: { value: 'clothing' },
        },
        {
          id: 'stab-4',
          view: { title: { text: 'Books' } },
          destination: { value: 'books' },
        },
        {
          id: 'stab-5',
          view: { title: { text: 'Home & Garden' } },
          destination: { value: 'home' },
        },
        {
          id: 'stab-6',
          view: { title: { text: 'Sports' } },
          destination: { value: 'sports' },
        },
      ],
    },
  },
  {
    id: 'demo-spaced-horizontal',
    view: {
      layout: 'spaced_horizontal',
      children: [
        {
          id: 'spaced-h-1',
          view: { layout: 'action', title: { text: 'Cancel' } },
          destination: { value: 'cancel' },
        },
        {
          id: 'spaced-h-2',
          view: { layout: 'action', title: { text: 'Confirm' } },
          destination: { value: 'confirm' },
        },
      ],
    },
  },
  {
    id: 'demo-spaced-vertical',
    view: {
      layout: 'spaced_vertical',
      children: [
        {
          id: 'spaced-v-1',
          view: { layout: 'input_text', title: { text: 'First Name' } },
          destination: { value: 'first-name' },
        },
        {
          id: 'spaced-v-2',
          view: { layout: 'input_text', title: { text: 'Last Name' } },
          destination: { value: 'last-name' },
        },
      ],
    },
  },
  {
    id: 'demo-header',
    view: {
      layout: 'header',
      title: { text: 'Section Header' },
      subtitle: { text: 'A descriptive subtitle for this section' },
    },
  },
];
