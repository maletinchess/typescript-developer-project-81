interface Template {
  [key: string]: string;
}

class HexletCode {
  static formFor(template: Template, options: { url?: string }): string {
    const { url } = options;
    return `<form action="${url || '#'}" method="post">${
      Object.entries(template)
        .map(([key, value]) => `<label>${key}: <input name="${key}" value="${value}"></label>`)
        .join('')
    }</form>`;
  }
}

export default HexletCode;
