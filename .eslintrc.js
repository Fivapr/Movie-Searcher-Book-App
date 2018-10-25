module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'max-len': ['error', 100],
    semi: 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'no-unused-expressions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    // 'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
}
