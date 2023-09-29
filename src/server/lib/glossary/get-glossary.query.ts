import client from "@sextival/server/client";
import { glossaries } from "@sextival/server/mappings";
import { GLOSSARY } from "@sextival/server/notion-dabatase";

export const getGlossary = async () => {
  const raw = await client.databases.query({
    database_id: GLOSSARY,
  });

  const glossary = glossaries(raw);
  const accordionGlossary = glossary.map((g) => ({
    label: g.name,
    description: g.description,
  }));

  return { glossary, accordionGlossary };
};
