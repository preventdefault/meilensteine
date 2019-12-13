const { setOutput, getInput, setFailed, debug } = require('@actions/core');
const { resolve } = require('path');

try {
  const path = getInput('package-path');

  debug(`get version from ${path}`);

  const version = require(resolve(path)).version;

  debug(`use version: ${version}`);

  setOutput('version', version);
} catch (/** Error */ error) {
  setFailed(error.message);
}
