const axios = require("axios");
const CAT_PACKAGES_LIST = [
  "@catastrophee/styles",
  "@catastrophee/ui",
  "@catastrophee/models"
];

const getCatPackageVersions = async () => {
  const promise = axios({
    url: "https://www.npmjs.com/package/catastrophee",
    method: "post",
    data: [
      {
        id: "npmName",
        comparator: "equals",
        values: CAT_PACKAGES_LIST
      }
    ]
  });
  const packagesList = await promise.then(response => {
    const versions = response.data.results;
    const packages = {};
    versions.forEach(version => {
      const lib = version.latestPath.split("/-/")[0].split("npm-local/")[1];
      if (packages[lib] !== undefined) {
        packages[lib] = [...packages[lib], version.name];
      } else {
        packages[lib] = [version.name];
      }
    });

    return packages;
  });
  return packagesList;
};

module.exports = {
  packages: CAT_PACKAGES_LIST,
  getCatPackageVersions
};
