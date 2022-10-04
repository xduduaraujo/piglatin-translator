import { formatAndTranslateSentence } from './script';

describe.each([
  ['sandwich', 'andwichsay'],
  ['Stop', 'Opstay'],
  ['No littering', 'Onay itteringlay'],
  ['No shirts, no shoes, no service', 'Onay irtsshay, onay oesshay, onay ervicesay'],
  ['No persons under 14 admitted', 'Onay ersonspay underay 14 admitteday'],
  ['Hey buddy, get away from my car!', 'Eyhay uddybay, etgay awayay omfray ymay arcay!'],
])('%s', (input, result) => {
  test(`returns ${result}`, () => {
    expect(formatAndTranslateSentence(input)).toBe(result);
  });
});
