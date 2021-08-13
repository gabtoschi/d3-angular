import { D3DefData } from './';


export interface D3DefCommonData {
  id?: string;
}

export function D3DefineDefCommonAttributes(element: any, data: D3DefCommonData): void {
  element
    .attr('id', data.id);
}

export type D3DefFunction = (defs: any, data: D3DefData) => void;
