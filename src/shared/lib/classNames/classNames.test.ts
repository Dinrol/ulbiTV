import { classNames } from '.';

describe('classNames', () => {
  test('with first parameter', () => {
    expect(classNames('class1')).toBe('class1');
  });
  test('with additional parameter', () => {
    expect(classNames('', {}, ['additional'])).toBe('additional');
  });
  test('with mods parameter', () => {
    expect(classNames('', { collapsed: true }, [])).toBe('collapsed');
  });
  test('with all parameter', () => {
    expect(classNames('class1', { collapsed: true }, ['class2']))
      .toBe('class1 collapsed class2');
  });
});
