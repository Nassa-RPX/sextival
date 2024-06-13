import { Schedule2024 } from "@sextival/sections/schedule/schedule-2024.section";
import { getSchedule2024 } from "@sextival/server/lib";
import { Page } from "@sextival/ui/page";

export default async function Programma() {
  const schedule = await getSchedule2024();

  return (
    <Page title="PROGRAMMA">
      <Schedule2024 schedule={schedule} centered />
    </Page>
  );
}
