import { Vector2 } from '@models';

import { D3DefCommonData, D3DefFunction, D3DefineDefCommonAttributes } from './common';


export interface D3LinearGradientStop {
  offset: number;
  color: string;
  opacity: number;
}

export interface D3LinearGradientData extends D3DefCommonData {
  start: Vector2;
  end: Vector2;
  stops: D3LinearGradientStop[];
}

export const D3LinearGradient: D3DefFunction = (defs: any, data: D3LinearGradientData) => {
  const element = defs
    .append('linearGradient')
    .attr('x1', data.start.x)
    .attr('y1', data.start.y)
    .attr('x2', data.end.x)
    .attr('y2', data.end.y);

  data.stops.forEach(stop => {
    element
      .append('stop')
      .attr('offset', `${stop.offset}%`)
      .attr('stop-color', stop.color)
      .attr('stop-opacity', stop.opacity);
  });

  D3DefineDefCommonAttributes(element, data);
};
