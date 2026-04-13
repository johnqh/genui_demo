import type { IRenderable } from '@sudobility/genui';
import { actionsData } from './actions';
import { inputsData } from './inputs';
import { controlsData } from './controls';
import { collectionsData } from './collections';
import { displayData } from './display';
import { spacingData } from './spacing';
import { mapsData } from './maps';

export const categoryData: Record<string, IRenderable[]> = {
  actions: actionsData,
  inputs: inputsData,
  controls: controlsData,
  collections: collectionsData,
  display: displayData,
  spacing: spacingData,
  maps: mapsData,
};
