export interface Guest {
  name: string;
  description: string;
  cover: string;

  talk_ids: string[];
}

export interface Talk {
  title: string;
  description: string;
  day: string;
  hour: string;
  type: Type;

  guest_ids: string[];
}

export type Schedule = Array<Talk>;

export type Type = "Workshop" | "Intervento";
export type Day = 17 | 18;

export type GroupedSchedule = Record<Day, Record<Type, Talk[]>>;

export interface Service {
  id: string;
  name: string;
  zone: string;
}

export interface Info {
  id: string;
  name: string;
  description: string;
}
