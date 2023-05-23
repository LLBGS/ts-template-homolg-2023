const jestdefaultconfig = require("./jest.config");

module.exports = {
  ...jestdefaultconfig,
  testmatch: ["**/*.test.ts"],
};
