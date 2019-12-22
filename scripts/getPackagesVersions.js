const axios = require("axios");
const RIO_PACKAGES_LIST = [
  "catastropheemedia",
  "@catastrophee/styles",
  "@catastrophee/ui",
  "catastropheetypeahead",
  "@catastrophee/models",
  "catastropheepdf"
];

const getRioPackageVersions = async () => {
  const promise = axios({
    url: "https://artifacts.netflix.com/ui/v1/native/versions/npm",
    method: "post",
    data: [
      {
        id: "npmName",
        comparator: "equals",
        values: RIO_PACKAGES_LIST
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
  packages: RIO_PACKAGES_LIST,
  getRioPackageVersions
};
