const core = require('@actions/core');
const github = require('@actions/github');

try {
  const value = parseInt(core.getInput('value'));
  const start = parseInt(core.getInput('start'));
  const end = parseInt(core.getInput('end'));

  var result;
  if (end == null || end.length == 0) {
    console.log(`Slice '${value}' from ${start} to end`);
    result = value.slice(start);
  } else {
    console.log(`Slice '${value}' from ${start} to ${end}`);
    result = value.substring(start, end);
  }

  core.setOutput("result", result);
  console.log(`Slice result: ${result}`);
  
} catch (error) {
  core.setFailed(error.message);
}
