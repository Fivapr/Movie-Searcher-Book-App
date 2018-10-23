module.exports = {
	parser: 'babel-eslint',
	extends: 'airbnb',
	env: {
		browser: true,
		jest: true,
	},
	plugins: ['react', 'jsx-a11y', 'import'],
	rules: {
		'max-len': ['error', 100],
		'no-underscore-dangle': ['error', { allow: ['_id'] }],
		'import/prefer-default-export': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js'],
			},
		],
	},
};
