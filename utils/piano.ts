import { Note, NOTE_LETTERS, NOTE_LETTERS_WITH_BLACK } from "@/constants/piano";

export function generateKeysByOctave(
  blackKey = false,
  octaveStart: number = 1,
  octaveEnd: number = 7
) {
  const totalOctaves = octaveEnd - octaveStart + 1;
  const octaves = new Array(totalOctaves).fill(0);
  const sourceNote = blackKey ? NOTE_LETTERS_WITH_BLACK : NOTE_LETTERS;
  const notes = octaves.map(
    (_, octave) =>
      sourceNote.map((note) => `${note}${octaveStart + octave}`) as Note[]
  );
  return notes;
}
