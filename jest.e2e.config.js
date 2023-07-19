// module.exports = {
//     moduleFileExtensions: ['js'],
//     testMatch: ['<rootDir>/out/test/**/*.test.js'],
//     verbose: true,
//     testEnvironment: "./src/test/vscode-environment.js"
//   };

// see https://github.com/microsoft/vscode-test/issues/37#issuecomment-700167820
const path = require("path");

module.exports = {
  moduleFileExtensions: ["js"],
  testMatch: ["<rootDir>/out/test/suite/**.test.js"],
  testEnvironment: path.join(__dirname,"src","test","vscode-environment.js"),
  verbose: true,
  moduleNameMapper: {
    vscode: path.join(__dirname, "src", "test", "vscode.js"),
  },
  moduleDirectories: [
    "node_modules",
    "<rootDir>",
    "src"
]
};

console.log('>> hello from jest-config', module.exports);