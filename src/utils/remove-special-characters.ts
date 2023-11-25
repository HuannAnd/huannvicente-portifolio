function replaceHyphenToSpace(inputString: string) {
  return inputString.replace(/-/g, ' ');
}

export default function removeSpecialCharacters(inputString: string) {
  return replaceHyphenToSpace(inputString.replace(/[^a-zA-Z0-9\s]/g, ' '))
}