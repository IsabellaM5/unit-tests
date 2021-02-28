export const hackerSpeak = (words) => {
  words = words.replaceAll(/a|A/g, 4)
  words = words.replaceAll(/e|E/g, 3)
  words = words.replaceAll(/i|I/g, 1)
  words = words.replaceAll(/o|O/g, 0)
  words = words.replaceAll(/s|S/g, 5)
  return words
}
