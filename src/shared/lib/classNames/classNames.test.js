import { classNames } from './classNames';

describe('classNames', () => {
  test('test with only first argument class  ', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('test with additional class ', () => {
    const expected = 'someClass class1 class1';
    expect(classNames('someClass', {}, ['class1', 'class1'])).toBe(expected);
  });

  test('test with mode', () => {
    const expected = 'someClass class1 class1 hovered scalable';
    expect(classNames('someClass', { hovered: true, scalable: true }, ['class1', 'class1'])).toBe(expected);
  });

  test('test with mode false', () => {
    const expected = 'someClass class1 class1 hovered';
    expect(classNames('someClass', { hovered: true, scalable: false }, ['class1', 'class1'])).toBe(expected);
  });

  test('test with mode undefined', () => {
    const expected = 'someClass class1 class1 hovered';
    expect(classNames('someClass', { hovered: true, scalable: undefined }, ['class1', 'class1'])).toBe(expected);
  });
});
