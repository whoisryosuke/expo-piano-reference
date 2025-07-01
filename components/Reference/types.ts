import { BaseNote, Note } from "@/constants/piano";

export type ReferenceItem = {
  name: string;
  note: BaseNote;
  notes: Note[];
};
