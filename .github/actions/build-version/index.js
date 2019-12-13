const { setOutput, getInput, setFailed, info } = require('@actions/core');
const { resolve } = require('path');

try {
  const path = getInput('package-path');

  info(`get version from ${path}`);

  const version = require(resolve(path)).version;

  info(`use version: ${version}`);

  setOutput('version', version);
} catch (/** Error */ error) {
  setFailed(error.message);
}
