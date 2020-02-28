declare module 'react-string-checker' {
  class CheckerStrings {
    constructor(path: string);

    run(): void;
    listFileString(file: string): string[];
    listAllStrings(): { file: string, strings: string[] }[];
  }
  export = CheckerStrings;
}