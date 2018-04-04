import {assert} from 'chai';

import {run as cliRun} from '../cli';

suite('cli', () => {
  test(
      'Directory should be equal to the last argument of the command',
      async() => {
        const originalArgv = process.argv;
        process.argv = ['node', 'RENAME', './here'];
        // you may want to register an stdout interceptor to filter and test the
        // output.
        const ret = await cliRun();
        assert(ret, 'here');

        process.argv = originalArgv;
      });
});
