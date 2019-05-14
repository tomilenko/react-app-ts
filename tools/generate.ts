const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
    {
        option: 'Create React Component',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/__component__.tsx',
        },
        stringReplacers: ['__component__'],
        output: {
            path: './src/components/__component__(pascalCase).tsx',
            pathAndFileNameDefaultCase: '(kebabCase)',
        },
	},
	{
        option: 'Create React Page',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/__page__Page.tsx',
        },
        stringReplacers: ['__page__'],
        output: {
            path: './src/pages/__page__(pascalCase)Page.tsx',
            pathAndFileNameDefaultCase: '(kebabCase)',
        },
    },
]);