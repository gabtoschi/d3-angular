import { Injectable } from '@angular/core';

import * as d3 from 'd3';

import { D3DefData, D3Defs, D3DefType } from './d3-defs';
import { createD3Element, D3Element } from './d3-element';


@Injectable()
export class D3Drawing {
  private svg: any;
  private width: number;
  private height: number;

  private defs: any;
  private elements: { [id: string]: D3Element } = {};

  constructor(selector: string, width: number, height?: number, debug = false) {
    this.width = width;
    this.height = height || width;

    this.svg = d3.select(selector)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    this.defs = this.svg.append('defs');

    if (debug) {
      this.svg.append('rect').attr('width', '100%').attr('height', '100%').attr('fill', '#e2e2e2');
    }
  }

  public createElement(id: string, centered = false): D3Element {
    const elementReference = this.svg.append('g');
    this.elements[id] = createD3Element(elementReference);

    if (centered) {
      this.elements[id].ref.attr(
        'transform', `translate(${this.width / 2} ${this.height / 2})`,
      );
    }

    return this.elements[id];
  }

  public getElement(id: string): D3Element {
    return this.elements[id];
  }

  public addDef(def: D3DefType, data: D3DefData): void {
    D3Defs[def](this.defs, data);
  }

  public delete(): void {
    this.svg.remove();
  }

}
