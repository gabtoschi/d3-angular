import { D3DefineElementCommonAttributes, D3ElementCommonData } from './common/common';


export interface D3TextData extends D3ElementCommonData {
  posX: number;
  posY: number;
  text: string;
  horizontalAnchor?: 'start' | 'middle' | 'end';
  verticalAnchor?: 'start' | 'middle' | 'end';
  style?: D3TextStyleData;
}

export interface D3VerticalTextData extends D3TextData {
  rotate: 'left' | 'right';
}

export interface D3TextStyleData {
  color?: string;
  weight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  font?: string;
  size?: string | number;
}

const verticalAnchorMap = {
  start: 'hanging',
  middle: 'central',
  end: 'text-top',
};

export function D3Text(data: D3TextData): void {
  const element = this.reference
    .append('text')
    .attr('x', data.posX)
    .attr('y', data.posY)
    .text(data.text)
    .attr('text-anchor', data.horizontalAnchor)
    .attr('dominant-baseline', verticalAnchorMap[data.verticalAnchor])
    .attr('fill', data.style?.color)
    .attr('font-weight', data.style?.weight)
    .attr('font-family', data.style?.font)
    .attr('font-size', data.style?.size);

  D3DefineElementCommonAttributes(element, data);
}

export function D3VerticalText(data: D3VerticalTextData): void {
  const element = this.reference
    .append('text')
    .text(data.text)
    .attr('transform',
      `translate(${data.posX}, ${data.posY}) rotate(${data.rotate === 'left' ? -90 : 90})`)
    .attr('text-anchor', data.horizontalAnchor)
    .attr('dominant-baseline', verticalAnchorMap[data.verticalAnchor])
    .attr('fill', data.style?.color)
    .attr('font-weight', data.style?.weight)
    .attr('font-family', data.style?.font)
    .attr('font-size', data.style?.size);

  D3DefineElementCommonAttributes(element, data);
}
