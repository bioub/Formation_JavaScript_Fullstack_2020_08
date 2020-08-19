const fs = require("fs-extra");
const path = require("path");
const del = require("del");
const md5 = require("md5");
const UglifyJS = require("uglify-es");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function clearDir(dirPath) {
  await fs.remove(dirPath);
  await fs.mkdir(dirPath);
}

async function build() {
  await clearDir(distPath);

  // const buf1 = await fs.readFile(horlogeJsPath);
  // const buf2 = await fs.readFile(indexJsPath);

  // await fs.writeFile(appJsDistPath, buf1);
  // await fs.appendFile(appJsDistPath, buf2);

  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));

  let str = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });

  str = str
    .replace(
      '<script src="./js/horloge.js"></script>',
      '<script src="./app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', "");

  await fs.writeFile(indexHtmlDistPath, str);

  console.log("Build done")
}

build();
