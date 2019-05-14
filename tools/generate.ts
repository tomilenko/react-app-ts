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
]);