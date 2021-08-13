import { D3DefineElementCommonAttributes, D3ElementCommonData } from './common/common';


export interface D3PathData extends D3ElementCommonData {
  commands: string;
  color?: string;
  opacity?: number;
}

export function D3Path(data: D3PathData): void {
  const element = this.reference
    .append('path')
    .attr('d', data.commands)
    .attr('fill', data.color)
    .attr('fill-opacity', data.opacity);

  D3DefineElementCommonAttributes(element, data);
}
