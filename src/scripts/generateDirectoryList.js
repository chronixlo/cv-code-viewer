const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);

const BLACKLIST = ["node_modules", ".git", "build"];

(async () => {
  const dirlist = await readDir(".");

  await writeFile(
    "./src/generated/directoryList.json",
    JSON.stringify(dirlist)
  );
})();

async function readDir(path) {
  const dirlist = await readdir(path);

  const items = await Promise.all(
    dirlist
      .filter((file) => !BLACKLIST.includes(file))
      .map(async (file) => {
        const filePath = path + "/" + file;
        try {
          const itemStat = await stat(filePath);

          if (itemStat.isDirectory()) {
            return {
              name: file,
              dir: true,
              path: filePath.slice(2),
              children: await readDir(filePath),
            };
          }

          return { name: file, dir: false, path: filePath.slice(2) };
        } catch (e) {
          console.log(e);
          return "";
        }
      })
  );

  return items.sort((a, b) => {
    let g = 0;

    if (a.dir && !b.dir) {
      g = -10;
    } else if (b.dir && a.dir) {
      g = 10;
    }

    return a.name.localeCompare(b.name) + g;
  });
}
