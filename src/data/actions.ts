import type { IRenderable } from '@sudobility/genui';

export const actionsData: IRenderable[] = [
  {
    id: 'demo-action',
    view: { layout: 'action', title: { text: 'Save Document' } },
    destination: { value: 'save' },
  },
  {
    id: 'demo-line-action',
    view: {
      layout: 'line_action',
      title: { text: 'Delete Account' },
      subtitle: { text: 'This action cannot be undone' },
    },
    destination: { value: 'delete-account' },
  },
  {
    id: 'demo-fab',
    view: { layout: 'fab', title: { text: '+' } },
    destination: { value: 'fab-add' },
  },
  {
    id: 'demo-fab-mini',
    view: { layout: 'fab_mini', title: { text: '+' } },
    destination: { value: 'fab-mini-add' },
  },
  {
    id: 'demo-fab-extended',
    view: { layout: 'fab_extended', title: { text: 'New Message' } },
    destination: { value: 'new-message' },
  },
  {
    id: 'demo-link',
    view: { layout: 'link', title: { text: 'Learn More' } },
    destination: { value: 'learn-more' },
  },
  {
    id: 'demo-nav-item',
    view: { layout: 'nav_item', title: { text: 'Home' } },
    destination: { value: '/home' },
  },
  {
    id: 'demo-nav-image-item',
    view: {
      layout: 'nav_image_item',
      title: { text: 'Profile' },
      image: { url: 'https://i.pravatar.cc/40?img=3' },
    },
    destination: { value: '/profile' },
  },
  {
    id: 'demo-tile',
    view: {
      layout: 'tile',
      title: { text: 'Premium Plan' },
      subtitle: { text: '$9.99/mo' },
    },
    destination: { value: 'premium' },
  },
  {
    id: 'demo-chip',
    view: { layout: 'chip', title: { text: 'React' } },
    destination: { value: 'tag-react' },
  },
];
