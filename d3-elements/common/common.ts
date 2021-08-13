import { D3ApplyEvents, D3EventData } from './events';
import { D3ApplyStroke, D3StrokeData } from './stroke';


export interface D3ElementCommonData {
  id?: string;
  filter?: string;
  disableMouseTarget?: boolean;
  events?: D3EventData;
  stroke?: D3StrokeData;
}

export function D3DefineElementCommonAttributes(element: any, data: D3ElementCommonData): void {
  element
    .attr('id', data.id)
    .attr('filter', data.filter ? `url(#${data.filter})` : '')
    .attr('pointer-events', data.disableMouseTarget ? 'none' : 'auto');

  D3ApplyEvents(element, data.events);
  D3ApplyStroke(element, data.stroke);
}
