const path = require('path')
const fs = require('fs')

function makeTitle(name) {
  return name.split(/\W+/)
    .map(word => word.length > 3 ? word.charAt(0).toUpperCase() + word.substring(1) : word)
    .join(" ")
}

function readCategories(dir) {
  return Object.fromEntries(
    fs.readdirSync(dir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => [dirent.name, readCategory(dirent)])
  );
}

function readCategory(dirent) {
  const dir = path.join(dirent.path, dirent.name);

  return fs.readdirSync(dir)
    .filter(file => /\.mdx?/.test(file))
    .map(file => {
      const name = file.substring(0, file.lastIndexOf('.'));
      const filePath = path.join(dir, file);
      const contents = fs.readFileSync(filePath).toString();
      const title = contents.match(/\#[^\r\n]+/)?.[0]?.substring(1)?.trim()
        ?? makeTitle(name);
      const href = `/docs/docs/tutorials/${dirent.name}/${name}`
      return { name, title, href };
    })
}

module.exports = async function dynamicTutorialsPlugin({ siteDir }) {
  return {
    name: 'dynamic-tutorials-list',
    async contentLoaded({ actions }) {
      const tutorialsDir = path.join(siteDir, '/docs/tutorials');
      const categories = readCategories(tutorialsDir);
      actions.setGlobalData({ categories });
    }
  }
}