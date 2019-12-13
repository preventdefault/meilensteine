const { setOutput, getInput, setFailed, info } = require('@actions/core');
const { resolve } = require('path');

try {
  const path = getInput('package-path');

  info(`get version from ${path}`);

  const { version } = require(resolve(path));

  info(`output version: ${version}`);

  setOutput('version', version);
} catch (/** Error */ { message }) {
  setFailed(message);
}
