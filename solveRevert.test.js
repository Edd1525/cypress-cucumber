const revertReplace = require('./solveRevert');

describe("revert and Replace Parenthesis", () => {

    test('happy Path 1', () => {
      expect(revertReplace.deleteParenthesesAndReplace('hola(EDWARD)')).toBe('holaDRAWDE');
    });

    test('happy Path 2', () => {
        expect(revertReplace.deleteParenthesesAndReplace('hola(EDWARD)BUstamante')).toBe('holaDRAWDEBUstamante');
      });

    test('more than 50 characters', () => {
        expect(revertReplace.deleteParenthesesAndReplace('hola(EDWARD)*(TEst)hola(EDWARD)*(TEst)hola(EDWARD)*(TEst)hola(EDWARD)*(TEst)')).toBe('error length must be less than 50');
      });

   })
