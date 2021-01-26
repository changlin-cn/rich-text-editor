const { spawn } = require('child_process');

const startServer = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'storybook:e2e']);
// startServer.stderr.on('data',err=>{
//     console.log(err)
// })
let once = false;
startServer.stdout.on('data', (data) => {
  console.log(data.toString());
  // hack code , wait umi
  if (data.toString().indexOf('started') >= 0) {
    console.log('started');
    if (!once) {
      once = true;
      console.log('Development server is started, ready to run tests.');

      const testCmd = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'test:e2e'], {
        stdio: 'inherit',
      });
      testCmd.on('exit', (code) => {
        startServer.kill();
        process.exit(code);
      });
    }
  }
});
