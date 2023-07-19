// see https://github.com/microsoft/vscode-test/issues/37#issuecomment-700167820
const { TestEnvironment } = require("jest-environment-node");
console.log('>>>> before');
const vscode = require("vscode");

console.log('>>>> after', vscode);


class VsCodeEnvironment extends TestEnvironment {
  async setup() {
    console.log('>>>> setup', vscode);
    await super.setup();
    this.global.vscode = vscode;
  }

  async teardown() {
    this.global.vscode = {};
    await super.teardown();
  }
}

module.exports = VsCodeEnvironment;