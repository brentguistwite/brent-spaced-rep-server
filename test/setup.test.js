const chai = require('chai');
const chaiHttp = require('chai-http');

const { TEST_DATABASE_URL, } = require('../config');
const { dbConnect, dbDisconnect, } = require('../db-mongoose');
// Const {dbConnect, dbDisconnect} = require('../db-knex');

// Set NODE_ENV to `test` to disable http layer logs
// You can do this in the command line, but this is cross-platform
process.env.NODE_ENV = 'test';

// Clear the console before each run
process.stdout.write('\x1Bc\n');

const expect = chai.expect;
chai.use(chaiHttp);

before(() => {
  return dbConnect(TEST_DATABASE_URL);
});

after(() => {
  return dbDisconnect();
});

describe('Mocha and Chai', () => {
  it('should be properly setup', () => {
    expect(true).to.be.true;
  });
});
