import { MapIcon } from "@sextival/components/icon";
import { Page } from "@sextival/ui/page";

import {
  MapLocation,
  Sexybus,
  VideoLocation,
} from "@sextival/sections/sextival-where";
import { Spacer } from "@sextival/ui/spacer";
import { LOCATION } from "@sextival/data";

const ComeTrovarci = () => {
  return (
    <Page meta={{ title: "Come Trovarci" }}>
      <section className="flex flex-col gap-4 items-center ">
        <h1 className="text-6xl font-bold bg-sex-gradient-text text-transparent bg-clip-text">
          DOVE?
        </h1>
        <div className="flex gap-1 items-center justify-center text-center">
          <MapIcon className="w-[60px] h-[60px] lg:h-[40px] lg:w-[40px]" />
          <h1 className="text-4xl font-bold leading-none">
            Via San Pietro 59, Rapallo (GE)
          </h1>
        </div>

        <MapLocation />

        <h1 className="text-4xl font-bold bg-sex-gradient-text text-transparent bg-clip-text">
          Come trovarci
        </h1>
        <div className="flex gap-4">
          <VideoLocation url={LOCATION.VIDEOS.highway}>
            Dall&apos;uscita autostradale
          </VideoLocation>

          <VideoLocation url={LOCATION.VIDEOS.station}>
            Dalla stazione ferroviaria
          </VideoLocation>
        </div>
      </section>

      <Spacer type="y" dimension="md" />

      <Sexybus />
    </Page>
  );
};

export default ComeTrovarci;
