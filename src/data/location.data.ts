export const VIDEOS = {
  highway: "https://youtu.be/M9-IYO2ivu8",
  station: "https://youtu.be/8OPygvWY43A",
};

export type Col = { sexybus: string; levante: string; ponente: string };
export type Day = { andata: Col[]; ritorno: Col[] };
export type Tab = Day[];

export const SEXYBUS: Tab = [
  {
    andata: [
      {
        sexybus: "14:20",
        levante: "12394 a Rapallo alle 13.54",
        ponente: "12385 a Rapallo alle 14.10	",
      },
      {
        sexybus: "15:20",
        levante: "12404 a Rapallo alle 14.51	",
        ponente: "12395 a Rapallo alle 15.09	",
      },
      {
        sexybus: "17:20",
        levante: "12422 a Rapallo alle 16.54	",
        ponente: "12415 a Rapallo alle 17.07	",
      },
      {
        sexybus: "19:20",
        levante:
          "-12442 a Rapallo alle 18:51 <br /> - TRENORD 33398 a Rapallo alle 19:12",
        ponente: "12435 a Rapallo alle 19.08	",
      },
    ],
    ritorno: [
      {
        sexybus: "18.50",
        levante: "12441 da Rapallo alle 19.19	",
        ponente:
          "-12445 da Rapallo alle 19.12 <br /> - 32831 da Rapallo alle 19.25",
      },
      {
        sexybus: "20:00",
        levante: "12452 da Rapallo alle 21.09* -	",
        ponente: "12465 da Rapallo alle 20.55	",
      },
      {
        sexybus: "22.30",
        levante:
          "-12470 da Rapallo alle 23.07<strong>*</strong> <br /> -3286 da Rapallo alle 23.40	",
        ponente: "21481 da Rapallo alle 22.53	",
      },
      {
        sexybus: "23:40",
        levante: "12482 da Rapallo alle 00.07*	",
        ponente: "3288 da Rapallo alle 00.25	",
      },
    ],
  },

  {
    andata: [
      {
        sexybus: "14:20",
        levante: "12394 a Rapallo alle 13.54",
        ponente: "12385 a Rapallo alle 14.10",
      },
      {
        sexybus: "15:20",
        levante: "12404 a Rapallo alle 14.51",
        ponente: "12395 a Rapallo alle 15.09",
      },
      {
        sexybus: "17:20",
        levante: "12422 a Rapallo alle 16.54",
        ponente: "12415 a Rapallo alle 17.07",
      },
      {
        sexybus: "19:20",
        levante:
          "- 12442 a Rapallo alle 18:51 <br /> - TRENORD 33398 a Rapallo alle 19:12",
        ponente: "12435 a Rapallo alle 19.08",
      },
    ],
    ritorno: [
      {
        sexybus: "18:50",
        levante: "12441 da Rapallo alle 19.19",
        ponente:
          "-12445 da Rapallo alle 19.12 <br /> -32831 da Rapallo alle 19.25",
      },
      {
        sexybus: "20:00",
        levante: "12452 da Rapallo alle 21.09* -",
        ponente: "12465 da Rapallo alle 20.55",
      },
      {
        sexybus: "22:30",
        levante:
          "-12470 da Rapallo alle 23.07<strong>*</strong> <br /> -3286 da Rapallo alle 23.40",
        ponente: "21481 da Rapallo alle 22.53",
      },
      {
        sexybus: "23:40",
        levante: "12482 da Rapallo alle 00.07*",
        ponente: "3288 da Rapallo alle 00.25",
      },
    ],
  },
];
