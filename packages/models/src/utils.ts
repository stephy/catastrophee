export function clearSpecialCharacters(str) {
  if (str === undefined) {
    return undefined;
  } else {
    const noSpaces = str.trim().replace(/(\s+)/gm, "");
    return noSpaces.replace(/[^\w\s.]/gm, "");
  }
}

export function urltoFile(url, filename, mimeType) {
  return fetch(url)
    .then(function(res) {
      return res.arrayBuffer();
    })
    .then(function(buf) {
      return new File([buf], filename, { type: mimeType });
    });
}
