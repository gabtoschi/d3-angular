export type D3EventFunction = (event: any) => void;

export interface D3EventData {
  [eventName: string]: D3EventFunction;
}

export function D3ApplyEvents(element: any, data: D3EventData): void {
  if (!data) { return; }

  for (const eventName of Object.keys(data)) {
    element.on(eventName, data[eventName]);
  }
}
