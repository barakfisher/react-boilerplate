

const moment = require.requireActual('moment'); // insteadf of import
// this file will provide the mock values to be used by the test files while calling moment
export default (timestamp = 0) => {
    return moment(timestamp);
};