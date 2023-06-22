import { Description } from '@tasks/entities/Description';

describe('Task description', () => {
  it('should be able to create a task description', () => {
    const description = new Description('Lever os cães para o passeio');

    expect(description).toBeTruthy();
  });

  it('should not be able to create a task description with less than 5 characters', () => {
    expect(() => new Description('aaa')).toThrow();
  });

  it('should not be able to create a task description with more than 240 characters', () => {
    expect(() => new Description('a'.repeat(241))).toThrow();
  });
});
