import { Title } from '@tasks/entities/Title';

describe('Task title', () => {
  it('should be able to create a task title', () => {
    const title = new Title('Passeio');

    expect(title).toBeTruthy();
  });

  it('should not be able to create a task title with less than 1 characters', () => {
    expect(() => new Title('')).toThrow();
  });

  it('should not be able to create a task title with more than 50 characters', () => {
    expect(() => new Title('a'.repeat(51))).toThrow();
  });
});
