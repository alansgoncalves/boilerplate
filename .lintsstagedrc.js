module.exports = {
    // Lint $ Preetfy TS and JS files
    '*.{js, jsx, ts, tsx}': (filenames) => [ // Filenames is an array of all the files that are staged and match the glob.
        `prettier --write ${filenames.join(' ')}` // Prettify
        `npm run lint --fix . ${filenames.join(' --file')}`, // Lint and fix
        `npm test -- --findRelatedTests ${filenames.join(' ')}` // Run tests related to the changed files
    ]
}