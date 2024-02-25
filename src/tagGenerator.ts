class Tag {
  name: string;

  attributes: Record<string, string>;

  constructor(name: string, attributes: Record<string, string> = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  setAttribute(name: string, value: string) {
    this.attributes[name] = value;
  }

  removeAttribute(name: string) {
    delete this.attributes[name];
  }

  toString(): string {
    const attributeString = Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');

    return `<${this.name} ${attributeString}>`;
  }
}

export default Tag;
