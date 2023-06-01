import client from "@sextival/server/client";
import { glossaries } from "@sextival/server/mappings";
import { GLOSSARY } from "@sextival/server/notion-dabatase";

export const getGlossary = async () => {
  const raw = await client.databases.query({
    database_id: GLOSSARY,
  });

  return glossaries(raw);
};
