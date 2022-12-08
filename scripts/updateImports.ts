import { ImportDeclaration, Project } from 'ts-morph'

const project = new Project()

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const flies = project.getSourceFiles()

function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages']
    return layers.some(layer => value.startsWith(layer))
}

flies.forEach(sourceFile => {
    const importDeclarations = sourceFile.getImportDeclarations()

    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue()

        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`)
        }
    })
})

project.save()
