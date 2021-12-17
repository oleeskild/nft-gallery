const fs = require('fs');
const path = require('path');
const sass = require('sass')
const CleanCSS = require('clean-css')

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = "styles.scss";

module.exports = class {
  async data () {
    const rawFilepath = path.join(__dirname, `../_includes/sass/${fileName}`);
    return {
      permalink: `nftcss/styles.css`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath)
    };
  };

  async render ({ rawCss, rawFilepath }) {
    const {css} = await sass.compile(rawFilepath);
    const output = new CleanCSS({}).minify(css.toString()).styles
    return output;
  };
}