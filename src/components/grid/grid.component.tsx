"use client";

import { GridData } from "./types";

interface GridProps {
  data: Array<GridData>;
}

const Grid = ({ data }: GridProps) => {
  return (
    <div className="mx-auto max-w-7xl">
      <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12  lg:gap-x-16">
        {data.map((d, i) => (
          <GridEl key={i} data={d} />
        ))}
      </dl>
    </div>
  );
};

export default Grid;

interface GridElProps {
  data: GridData;
}

const GridEl = ({ data }: GridElProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-center">
        {data.icon()}
        
        <dt className="text-lg font-medium">{data.title}</dt>
      </div>
      <dd className="mt-2 text-justify">{data.description}</dd>
    </div>
  );
};
