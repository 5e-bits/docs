const path = require('path');
const fs = require('fs');

function makeTitle(name) {
  return name.split(/\W+/)
    .map(word => word.length > 3 ? word.charAt(0).toUpperCase() + word.substring(1) : word)
    .join(' ');
}

function readCategories(dir, baseUrl) {
  return Object.fromEntries(
    fs.readdirSync(dir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(({ name }) => [name, readCategory(name, dir, baseUrl)])
  );
}

function readCategory(category, dir, baseUrl) {
  const categoryDir = path.join(dir, category);

  return fs.readdirSync(categoryDir)
    .filter(file => /\.mdx?/.test(file))
    .map(file => {
      const name = file.substring(0, file.lastIndexOf('.'));

      const filePath = path.join(categoryDir, file);
      const contents = fs.readFileSync(filePath).toString();

      const mdTitle = contents.match(/\#[^\r\n]+/)
      const title = mdTitle !== null
        ? mdTitle[0].substring(1).trim()
        : makeTitle(name);

      const href = baseUrl + `docs/tutorials/${category}/${name}`;

      return { name, title, href };
    })
}

module.exports = async function dynamicTutorialsPlugin({ siteDir, baseUrl }) {
  return {
    name: 'dynamic-tutorials-list',
    async contentLoaded({ actions }) {
      const tutorialsDir = path.join(siteDir, '/docs/tutorials');
      const categories = readCategories(tutorialsDir, baseUrl);
      actions.setGlobalData({ categories });
    }
  }
}
