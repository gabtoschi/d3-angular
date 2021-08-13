import { D3DefineElementCommonAttributes, D3ElementCommonData } from './common/common';
import { D3Text, D3TextData, D3TextStyleData } from './text';


export interface D3CircleData extends D3ElementCommonData {
  posX: number;
  posY: number;
  radius: number;
  color: string;
}

export interface D3CircleWithCenteredTextData extends D3CircleData {
  text: string;
  style?: D3TextStyleData;
  disableTextEvents?: boolean;
}

export function D3Circle(data: D3CircleData): void {
  const element = this.reference
    .append('circle')
    .attr('cx', data.posX)
    .attr('cy', data.posY)
    .attr('r', data.radius)
    .attr('fill', data.color);

  D3DefineElementCommonAttributes(element, data);
}

export function D3CircleWithCenteredText(data: D3CircleWithCenteredTextData): void {
  D3Circle.bind(this)(data as D3CircleData);
  D3Text.bind(this)({
    posX: data.posX, posY: data.posY,
    text: data.text,
    horizontalAnchor: 'middle', verticalAnchor: 'middle',
    style: data.style,
    disableMouseTarget: data.disableTextEvents,
  } as D3TextData);
}
