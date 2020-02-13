const getCatPackageVersions = require("./getPackagesVersions")
  .getCatPackageVersions;
const fs = require("fs");

const versions = getCatPackageVersions();
versions.then(results => {
  // write to a new file named 2pac.txt
  const latestVersions = {};
  Object.keys(results).forEach(packageName => {
    const latest = results[packageName][results[packageName].length - 1];
    latestVersions[packageName] = latest;
  });
  const content = `export const versions = ${JSON.stringify(latestVersions)}`;
  // This will save a file 'versions.ts' in the stories folder
  fs.writeFile("./stories/versions.ts", content, err => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log("Versions saved!");
  });
});
