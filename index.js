const core = require('@actions/core');
const github = require('@actions/github');

try {
  const value = core.getInput('value');
  const start = parseInt(core.getInput('start'));
  const end = core.getInput('end');

  var result;
  if (end == null || end.length == 0) {
    console.log(`Slice '${value}' from ${start} to end`);
    result = value.slice(start);
  } else {
    console.log(`Slice '${value}' from ${start} to ${end}`);
    result = value.slice(start, parseInt(end));
  }

  core.setOutput("result", result);
  console.log(`Slice result: ${result}`);
  
} catch (error) {
  core.setFailed(error.message);
}
