import { D3DropShadow, D3DropShadowData } from './drop-shadow';
import { D3LinearGradient, D3LinearGradientData } from './linear-gradient';


export const D3Defs = {
  linearGradient: D3LinearGradient,
  dropShadow: D3DropShadow,
};

export type D3DefType = keyof typeof D3Defs;
export type D3DefData = D3LinearGradientData | D3DropShadowData;
