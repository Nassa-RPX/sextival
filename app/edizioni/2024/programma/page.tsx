import { getSchedule } from "@sextival/server/lib";
import { Page } from "@sextival/ui/page";
import { Schedule } from "@sextival/sections/schedule";

export default async function Programma() {
  const schedule = await getSchedule();

  return (
    <Page title="PROGRAMMA">
      <Schedule schedule={schedule} centered />
    </Page>
  );
}
