import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

console.log('>> after import');
// import * as myExtension from '../../extension';
describe('Extension Test Suite', () => {
    console.log('>> in describe');
    vscode.window.showInformationMessage('Start all tests.');
    test('Sample test', () => {
        console.log('>> in test');
        assert.strictEqual(-1, [1, 2, 3].indexOf(5));
        assert.strictEqual(-1, [1, 2, 3].indexOf(0));
    });
});

