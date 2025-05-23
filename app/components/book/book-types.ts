export interface Chapter {
  id: string;
  title: string;
  file: string;
}

export interface Book {
  id: string;
  title: string;
  chapters: Chapter[];
  linesPerPage: number;
}