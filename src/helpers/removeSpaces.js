const removeSpaces = text => {
  if (typeof text === 'string' && text.length) {
    const firstReplace = text.replace(/\s\s+/g, ' ');
    const regex = /^\s*|\s*$/g;

    return firstReplace.replace(regex, '');
  }
  return text;
};

export default removeSpaces;
