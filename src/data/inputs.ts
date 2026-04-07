import type { IRenderable } from '@sudobility/genui';

export const inputsData: IRenderable[] = [
  {
    id: 'demo-input-text',
    view: {
      layout: 'input_text',
      title: { text: 'Full Name' },
      subtitle: { text: 'Enter your full legal name' },
      valueText: { text: 'John Doe' },
    },
    destination: { value: 'name' },
  },
  {
    id: 'demo-input-numeric',
    view: {
      layout: 'input_numeric',
      title: { text: 'Quantity' },
      valueText: { text: '1' },
    },
    destination: { value: 'quantity' },
  },
  {
    id: 'demo-input-password',
    view: {
      layout: 'input_password',
      title: { text: 'Password' },
      subtitle: { text: 'At least 8 characters' },
    },
    destination: { value: 'password' },
  },
  {
    id: 'demo-input-email',
    view: {
      layout: 'input_email',
      title: { text: 'Email Address' },
      valueText: { text: 'user@example.com' },
    },
    destination: { value: 'email' },
  },
  {
    id: 'demo-input-phone',
    view: {
      layout: 'input_phone',
      title: { text: 'Phone Number' },
      valueText: { text: '+1 555-0100' },
    },
    destination: { value: 'phone' },
  },
  {
    id: 'demo-input-date',
    view: {
      layout: 'input_date',
      title: { text: 'Birth Date' },
    },
    destination: { value: 'birthdate' },
  },
  {
    id: 'demo-input-text-block',
    view: {
      layout: 'input_text_block',
      title: { text: 'Bio' },
      subtitle: { text: 'Tell us about yourself' },
      valueText: { text: 'Software engineer passionate about UI frameworks.' },
    },
    destination: { value: 'bio' },
  },
  {
    id: 'demo-search',
    view: {
      layout: 'search',
      title: { text: 'Search products...' },
    },
    destination: { value: 'search' },
  },
];
