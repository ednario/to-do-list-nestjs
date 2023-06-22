export class Description {
  private readonly description: string;

  get value(): string {
    return this.description;
  }

  private validateDescriptionLength(description: string): boolean {
    return description.length >= 5 && description.length <= 240;
  }

  constructor(description: string) {
    const isDescriptionLengthValid =
      this.validateDescriptionLength(description);

    if (!isDescriptionLengthValid) {
      throw new Error('description length error.');
    }

    this.description = description;
  }
}
