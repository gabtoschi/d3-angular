

import { D3DefineElementCommonAttributes, D3ElementCommonData } from './common';


export interface D3RectData extends D3ElementCommonData {
  startPosX: number;
  startPosY: number;
  width: number;
  height: number;

  color: string;
}

export function D3Rect(data: D3RectData): void {
  const element = this.reference
    .append('rect')
    .attr('transform', `translate(${data.startPosX},${data.startPosY})`)
    .attr('width', data.width)
    .attr('height', data.height)
    .attr('fill', data.color);

  D3DefineElementCommonAttributes(element, data);
}
