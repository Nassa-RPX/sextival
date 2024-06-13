"use client";

import { HammerIcon, MicrophoneIcon } from "@sextival/components/icon";
import { GroupedSchedule2024, Type } from "@sextival/server/types";

import { useState } from "react";
import clsx from "clsx";

import { Spacer } from "@sextival/ui/spacer";
import { Modal } from "@sextival/components/modal";

import { TypeButton } from "./type-button";
import { ModalGuests } from "./modal-guests";
import { Talk } from "./talk";

interface Props {
  schedule: GroupedSchedule2024;
  centered?: boolean;
}

export const Schedule2024 = ({ schedule, centered }: Props) => {
  const [selectedType, setSelectedType] = useState<Type>("Intervento");

  const [selectedGuests, setSelectedGuests] = useState<string[] | undefined>(
    undefined,
  );

  return (
    <>
      <Spacer type="y" dimension="sm" />

      <div className="mx-auto flex gap-4 items-center">
        <TypeButton
          icon={<MicrophoneIcon />}
          selected={selectedType === "Intervento"}
          onClick={() => setSelectedType("Intervento")}
        >
          Talk
        </TypeButton>

        <TypeButton
          selected={selectedType === "Workshop"}
          onClick={() => setSelectedType("Workshop")}
          icon={<HammerIcon />}
        >
          Workshop
        </TypeButton>
      </div>

      <Spacer type="y" dimension="md" />

      <div
        className={clsx(
          "flex flex-col gap-4 lg:gap-2 overflow-hidden",
          centered && "lg:w-4/5 lg:mx-auto mb-4",
        )}
      >
        <span className="text-brand-blue text-3xl font-bold">SABATO 22</span>
      </div>

      <div
        className={clsx(
          "flex flex-col gap-4 lg:gap-2 overflow-hidden",
          centered && "lg:w-4/5 lg:mx-auto ",
        )}
      >
        {schedule &&
          schedule[22] &&
          schedule[22][selectedType].map((t, i) => (
            <Talk
              key={t.title}
              idx={i}
              title={t.title}
              description={t.description}
              hour={t.hour}
              guests_ids={t.guest_ids}
              onClickGuests={(ids) => setSelectedGuests(ids)}
            />
          ))}
      </div>

      <Spacer type="y" dimension="lg" />

      <div
        className={clsx(
          "flex flex-col gap-4 lg:gap-2 overflow-hidden",
          centered && "lg:w-4/5 lg:mx-auto mb-4",
        )}
      >
        <span className="text-brand-blue text-3xl font-bold">DOMENICA 23</span>
      </div>
      <div
        className={clsx(
          "flex flex-col gap-4 lg:gap-2 overflow-hidden",
          centered && "lg:w-4/5 lg:mx-auto ",
        )}
      >
        {schedule &&
          schedule[23] &&
          schedule[23][selectedType].map((t, i) => (
            <Talk
              key={t.title}
              idx={i}
              title={t.title}
              description={t.description}
              hour={t.hour}
              guests_ids={t.guest_ids}
              onClickGuests={(ids) => setSelectedGuests(ids)}
            />
          ))}
      </div>

      <Modal
        open={!!selectedGuests}
        onClose={() => setSelectedGuests(undefined)}
        title="Ospitə"
      >
        <ModalGuests guest_ids={selectedGuests!} />
      </Modal>
    </>
  );
};
