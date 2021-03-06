
const vscode = require(`vscode`);

module.exports = class Configuration {
  /**
   * Returns variable not specific to a host (e.g. a global config)
   * @param {string} prop 
   */
  static get(prop) {
    const globalData = vscode.workspace.getConfiguration(`vscode-rpgle`);
    return globalData.get(prop);
  }
}