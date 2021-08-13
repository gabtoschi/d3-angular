import { D3Circle, D3CircleWithCenteredText } from './circle';
import { D3Path } from './path';
import { D3Rect } from './rect';
import { D3Text, D3VerticalText } from './text';


export const D3ElementFunctionList = {
  addCircle: D3Circle,
  addCircleWithCenteredText: D3CircleWithCenteredText,
  addPath: D3Path,
  addRect: D3Rect,
  addText: D3Text,
  addVerticalText: D3VerticalText,
};

export type D3ElementFunctions = typeof D3ElementFunctionList;

