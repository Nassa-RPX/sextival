import { Metadata } from "next";

import { LOCATION } from "@sextival/data";
import { MapIcon } from "@sextival/components/icon";
import { Page } from "@sextival/ui/page";
import { Spacer } from "@sextival/ui/spacer";

import { MapLocation, Sexybus, VideoLocation } from "./sections";

export const metadata: Metadata = {
  title: "Dove Trovarci | Sextival",
};

const ComeTrovarci = () => {
  return (
    <Page>
      <section className="flex gap-4 justify-center text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-bold text-brand-blue ">DOVE?</h1>
          <div className="flex gap-1 items-center justify-center text-center">
            <MapIcon className="w-[60px] h-[60px] lg:h-[40px] lg:w-[40px]" />
            <h1 className="text-xl font-bold leading-none">
              Via San Pietro 59, Rapallo (GE)
            </h1>
          </div>

          <MapLocation />

          <div className="flex gap-2">
            <VideoLocation url={LOCATION.VIDEOS.highway}>
              Dall&apos;uscita autostradale
            </VideoLocation>

            <VideoLocation url={LOCATION.VIDEOS.station}>
              Dalla stazione ferroviaria
            </VideoLocation>
          </div>
        </div>
      </section>

      <Spacer type="y" dimension="md" />

      <Sexybus />
    </Page>
  );
};

export default ComeTrovarci;
