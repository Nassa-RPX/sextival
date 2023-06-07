import { NotionToMarkdown } from "notion-to-md";

import client from "../client";

export const getPage = async (id: string) => {
  const n2m = new NotionToMarkdown({ notionClient: client });
  const mdblocks = await n2m.pageToMarkdown(id);
  return n2m.toMarkdownString(mdblocks);
};
