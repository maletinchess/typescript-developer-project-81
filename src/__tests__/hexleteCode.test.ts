import { describe, it, expect } from 'vitest';
import HexletCode from '../hexleteCode';

describe('formFor', () => {
  it('should return a form element with default method and action', () => {
    const template = {};
    const options = {};
    const expected = '<form action="#" method="post"></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return an empty form element when the template argument is an empty object', () => {
    const template = {};
    const options = {};
    const expected = '<form action="#" method="post"></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return a form element with specified method and action', () => {
    const template = {};
    const options = { url: '/submit' };
    const expected = '<form action="/submit" method="post"></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return a form element with input fields for each key-value pair in the template', () => {
    const template = { name: 'John', age: '30' };
    const options = {};
    const expected = '<form action="#" method="post"><label>name: <input name="name" value="John"></label><label>age: <input name="age" value="30"></label></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return a form element with input fields and specified method and action', () => {
    const template = { name: 'John', age: '30' };
    const options = { url: '/submit' };
    const expected = '<form action="/submit" method="post"><label>name: <input name="name" value="John"></label><label>age: <input name="age" value="30"></label></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return a form element with input fields and specified method and action when template is empty', () => {
    const template = {};
    const options = { url: '/submit' };
    const expected = '<form action="/submit" method="post"></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return a form element with input fields and specified method and action when template has one key-value pair', () => {
    const template = { name: 'John' };
    const options = { url: '/submit' };
    const expected = '<form action="/submit" method="post"><label>name: <input name="name" value="John"></label></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return a form element with input fields and specified method and action when template has multiple key-value pairs', () => {
    const template = { name: 'John', age: '30', email: 'john@example.com' };
    const options = { url: '/submit' };
    const expected = '<form action="/submit" method="post"><label>name: <input name="name" value="John"></label><label>age: <input name="age" value="30"></label><label>email: <input name="email" value="john@example.com"></label></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return a form element with input fields and specified method and action when template has special characters in values', () => {
    const template = { name: 'John & Doe', age: '30 < 40', email: 'john@example.com' };
    const options = { url: '/submit' };
    const expected = '<form action="/submit" method="post"><label>name: <input name="name" value="John & Doe"></label><label>age: <input name="age" value="30 < 40"></label><label>email: <input name="email" value="john@example.com"></label></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return a form element with input fields and specified method and action when template has special characters in keys', () => {
    const template = { 'name & age': 'John', 'email < phone': 'john@example.com' };
    const options = { url: '/submit' };
    const expected = '<form action="/submit" method="post"><label>name & age: <input name="name & age" value="John"></label><label>email < phone: <input name="email < phone" value="john@example.com"></label></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return a form element with input fields and specified method and action when template has special characters in keys and values', () => {
    const template = { 'name & age': 'John & Doe', 'email < phone': 'john@example.com < 1234567890' };
    const options = { url: '/submit' };
    const expected = '<form action="/submit" method="post"><label>name & age: <input name="name & age" value="John & Doe"></label><label>email < phone: <input name="email < phone" value="john@example.com < 1234567890"></label></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });

  it('should return a form element with input fields and specified method and action when template has empty values', () => {
    const template = { name: '', age: '', email: '' };
    const options = { url: '/submit' };
    const expected = '<form action="/submit" method="post"><label>name: <input name="name" value=""></label><label>age: <input name="age" value=""></label><label>email: <input name="email" value=""></label></form>';
    expect(HexletCode.formFor(template, options)).toBe(expected);
  });
});
