export class Title {
  private readonly title: string;

  get value(): string {
    return this.title;
  }

  private validateTitleLength(title: string): boolean {
    return title.length >= 1 && title.length <= 50;
  }

  constructor(title: string) {
    const isTitleLengthValid = this.validateTitleLength(title);

    if (!isTitleLengthValid) {
      throw new Error('title length error.');
    }

    this.title = title;
  }
}
