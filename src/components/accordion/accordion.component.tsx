export interface AccordionData {
  label: string;
  description: string;
}

interface Props {
  data: Array<AccordionData>;
}

export const Accordion = ({ data }: Props) => {
  return (
    <div className="flex flex-col">
      {data.map(({ label, description }) => (
        <div className="p-4 bg-sex-blue-4 bg-opacity-25 border-b-2 border-b-sex-blue-4 border-opacity-25 flex flex-col">
          <span>{label}</span>

          <div className="p-4 text-lg">{description}</div>
        </div>
      ))}
    </div>
  );
};
