import { runCLI } from 'jest';


const path = require('path');


interface ITestRunner {
	run(testsRoot: string, clb: (error: Error, failures?: number) => void): void;
  }

const jestTestRunnerForVSCodeE2E: ITestRunner = {
	run(testsRoot: string, reportTestResults: (error: Error, failures?: number) => void): void {
		const projectRootPath = path.resolve(__dirname, "../../..");
		console.log('>> Project2', projectRootPath);
		const config = path.join(projectRootPath, "jest.e2e.config.js");

    runCLI({ config,cache:false, runInBand:true } as any, [projectRootPath])
      .then((jestCliCallResult: any) => {
        reportTestResults(undefined as any, jestCliCallResult.results.numFailedTests);
      })
      .catch((errorCaughtByJestRunner: any) => {
        reportTestResults(errorCaughtByJestRunner, 0);
      });
  }
};

module.exports = jestTestRunnerForVSCodeE2E;