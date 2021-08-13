import { D3DefCommonData, D3DefFunction, D3DefineDefCommonAttributes } from './common';


export interface D3DropShadowData extends D3DefCommonData {
  deviation: number;
  offsetX: number;
  offsetY: number;
  color?: string;
  opacity?: number;
}

export const D3DropShadow: D3DefFunction = (defs: any, data: D3DropShadowData) => {
  const element = defs.append('filter')
    .attr('width', '200%')
    .attr('height', '200%');

  element.append('feDropShadow')
    .attr('stdDeviation', data.deviation)
    .attr('dx', data.offsetX)
    .attr('dy', data.offsetY)
    .attr('flood-color', data.color)
    .attr('flood-opacity', data.opacity);

  D3DefineDefCommonAttributes(element, data);
};
