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
  type: "Workshop" | "Intervento";

  guest_ids: string[];
}

export type Schedule = Array<Talk>;
