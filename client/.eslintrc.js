const requireText = require('require-text');
const gqlSchemaString = requireText('./graphql/schema.graphql', require);

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['graphql'],
  extends: ['ezcater-base', 'ezcater-react'],
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaString: gqlSchemaString,
      },
    ],
    'graphql/named-operations': [
      'error',
      {
        schemaString: gqlSchemaString,
      },
    ],
    'graphql/capitalized-type-name': [
      'error',
      {
        schemaString: gqlSchemaString,
      },
    ],
  },
  parser: 'babel-eslint',
  parserOptions: {
    jsx: true,
  },
  root: true,
};
