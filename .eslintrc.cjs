/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-tabs': 0,
		indent: 0,
		'comma-dangle': 0,
		'vue/html-self-closing': 0,
		'vue/html-indent': 0,
		'vue/singleline-html-element-content-newline': 0,
		'vue/multi-word-component-names': 0,
		curly: ['error', 'multi-line'],
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/no-empty-interface': 0,
		'func-call-spacing': 0,
		'space-before-function-paren': 0,
		'arrow-parens': 0,
		'vue/attributes-order': 0,
		'vue/valid-template-root': 1,
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
}
