import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { MdStringObject } from "notion-to-md/build/types";

export interface Guest {
  name: string;
  description: string;
  cover: string;
  id: string;
  talk_ids: string[];
}

export interface Talk {
  title: string;
  description: string;
  day: string;
  hour: string;
  type: Type;

  guest_ids: string[];
}

export type Schedule = Array<Talk>;

export type Type = "Workshop" | "Intervento";
export type Day = 17 | 18;

export type GroupedSchedule = Record<Day, Record<Type, Talk[]>>;

export type GroupedSchedule2024 = Record<22 | 23, Record<Type, Talk[]>>;

export interface Service {
  id: string;
  name: string;
  zone: string;
  order: number;
}

export interface Info {
  id: string;
  name: string;
  description: string;
}

export interface Glossary {
  id: string;
  name: string;
  description: string;
}

export type NotionPage = MdStringObject;

export type NotionResult =
  | PageObjectResponse
  | PartialPageObjectResponse
  | PartialDatabaseObjectResponse
  | DatabaseObjectResponse;

export type NotionRichText = RichTextItemResponse;
