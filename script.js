const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
const pontuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;

// String generic manipulation
const stringHasNoConsonants = (string) => string.split('').every((letter) => vowels.includes(letter));

const stringHasNoLetters = (string) => {
  const allLettersRegex = /[a-zA-Z]/g;
  return string.length === 0 || !allLettersRegex.test(string);
};

const indexOfFirstVowel = (string) => {
  return [...string].findIndex((letter) => vowels.includes(letter));
};

const indexOfPontuation = (string) => string.slice(1).search(pontuationRegex);

const removeAllPontuations = (string) => string.replace(pontuationRegex, '');

const firstLetterOfStringIsCapitalized = (string) => string[0].toUpperCase() === string[0];
// ------------------------------

const addSuffixForTranslatedWord = (word) => (stringHasNoConsonants(word) ? 'yay' : 'ay');

const pigLatinWordTranslator = (word) => {
  if (stringHasNoLetters(word)) return word;
  const firstLetterShouldBeCapital = firstLetterOfStringIsCapitalized(word);
  const firstVowelIndex = indexOfFirstVowel(word);
  const pontuationIndex = indexOfPontuation(word);

  const wordWithoutPontuations = removeAllPontuations(word);
  const pontuation = pontuationIndex !== -1 ? word[pontuationIndex + 1] : '';

  const [prefix, restOfWord] = [
    wordWithoutPontuations.slice(0, firstVowelIndex),
    wordWithoutPontuations.slice(firstVowelIndex),
  ];

  const stem = firstLetterShouldBeCapital ? restOfWord.charAt(0).toUpperCase() + restOfWord.slice(1) : restOfWord;

  const translatedWord = `${
    stem + prefix.toLowerCase() + addSuffixForTranslatedWord(wordWithoutPontuations) + pontuation
  }`;

  return translatedWord;
};

export const formatAndTranslateSentence = (input) => {
  const words = input.split(' ');

  return words.map((word) => pigLatinWordTranslator(word)).join(' ');
};
