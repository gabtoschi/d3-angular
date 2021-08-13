export interface D3StrokeData {
  color: string;
  width: number;
  opacity?: number;
}

export function D3ApplyStroke(element: any, data: D3StrokeData): void {
  if (!data) { return; }

  element
      .attr('stroke', data.color)
      .attr('stroke-width', data.width)
      .attr('stroke-opacity', data.opacity);
}
