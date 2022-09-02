export type TimelineEvent = {
  time: string;
  title: string;
  description?: string;
};

export type TimelineData = Array<TimelineEvent>;

export type TimelineColors = {
  line: string;
  point: string;
  title: string;
};
