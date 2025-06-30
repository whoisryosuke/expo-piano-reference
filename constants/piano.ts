export type WhiteNotes = "C" | "D" | "E" | "F" | "G" | "A" | "B";
// For sake of simplicity we do sharp notes only. Might expand later.
export type BlackNotes = "C#" | "D#" | "F#" | "G#" | "A#";
export type BaseNote = WhiteNotes | BlackNotes;
export type Octaves = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
export type Note = `${BaseNote}${Octaves}`;

// Our graph goes from 0 - FRAME_HEIGHT_TIME seconds
export const FRAME_HEIGHT_TIME = 10;

// It's technically 7, but arrays include 0 - so we reduce by 1
export const OCTAVES = 7;
export const NOTE_LETTERS: Partial<WhiteNotes>[] = [
  "C",
  "D",
  "E",
  "F",
  "G",
  "A",
  "B",
];
export const NOTE_LETTERS_WITH_BLACK: BaseNote[] = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export const NOTE_LETTERS_BLACK: Partial<BaseNote>[] = [
  "C#",
  "D#",
  "F#",
  "G#",
  "A#",
];

// Styling
export const KEYBOARD_WHITE_KEY_WIDTH = 20;
export const KEYBOARD_BLACK_KEY_WIDTH = KEYBOARD_WHITE_KEY_WIDTH / 2;
