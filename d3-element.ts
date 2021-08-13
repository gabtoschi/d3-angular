import { Injectable } from '@angular/core';

import { D3ElementFunctionList, D3ElementFunctions } from './d3-elements';


export type D3Element = D3ElementCore & D3ElementFunctions;

export function createD3Element(reference: any): D3Element {
  return new D3ElementCore(reference) as D3Element;
}

@Injectable()
export class D3ElementCore {
  private reference: any;

  get ref(): any {
    return this.reference;
  }

  constructor(reference: any) {
    this.reference = reference;

    Object.keys(D3ElementFunctionList).forEach(elementName => {
      this[elementName] = D3ElementFunctionList[elementName];
    });
  }
}
