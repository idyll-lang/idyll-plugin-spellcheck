const { convertV1ToV2, convertV2ToV1 } = require('idyll-ast').converters;
const AST = require('idyll-ast/v1');
const Spellchecker = require('spellchecker');

module.exports = (ast) => {
  const text = AST.getText(convertV2ToV1(ast));
  const misspellings = Spellchecker.checkSpelling(text);

  misspellings.forEach(({start, end}) => {
    console.warn(`Found misspelling: ${text.substring(start, end)}`);
  })
  return ast;
};