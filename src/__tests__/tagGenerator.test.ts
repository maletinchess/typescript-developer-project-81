// Should return a string representation of the tag with its name and attributes
import { test, suite, expect } from 'vitest';
import Tag from '../tagGenerator';

suite('Tag toString() Method', () => {
  test('should return a string representation of the tag with its name and attributes', () => {
    const tag = new Tag('div', { id: 'myDiv', class: 'container' });
    const result = tag.toString();
    expect(result).toBe('<div id="myDiv" class="container">');
  });

  test('should return a string representation of the tag without attributes', () => {
    const tag = new Tag('p', {});
    const result = tag.toString();
    expect(result).toBe('<p>');
  });

  test('should return a string representation of the tag with one attribute', () => {
    const tag = new Tag('a', { href: 'https://example.com' });
    const result = tag.toString();
    expect(result).toBe('<a href="https://example.com">');
  });
});
