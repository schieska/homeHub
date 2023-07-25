export function decodeHtmlEntity(encodedString) {
    const regex = /&#(\d+);|&([a-z]+);/gi;
    return encodedString.replace(regex, (match, num, name) => {
      if (num) {
        return String.fromCharCode(num);
      } else {
        const entity = {
          amp: '&',
          apos: "'",
          lt: '<',
          gt: '>',
          quot: '"',
        }[name];
        return entity || match;
      }
    });
  }