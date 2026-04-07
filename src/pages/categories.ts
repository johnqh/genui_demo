export interface Category {
  id: string;
  label: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { id: 'actions', label: 'Actions & Buttons', description: 'Buttons, FABs, links, tiles, chips' },
  {
    id: 'inputs',
    label: 'Text Inputs',
    description: 'Text, numeric, password, email, phone, date',
  },
  { id: 'controls', label: 'Controls', description: 'Toggles, sliders, selects' },
  {
    id: 'collections',
    label: 'Collections',
    description: 'Lists, grids, carousels, stacks, tabs',
  },
  {
    id: 'display',
    label: 'Display',
    description: 'Lines, paragraphs, images, center, footer',
  },
  { id: 'spacing', label: 'Spacing', description: 'Horizontal and vertical spacers' },
];
