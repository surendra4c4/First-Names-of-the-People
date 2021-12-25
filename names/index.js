const peoplesName = require("../country/state/city/index");
const firstNames = require("../utilities/utils/index");

const getPeopleInCity = (peoplesName) => {
  return firstNames(peoplesName);
};

module.exports = getPeopleInCity;
