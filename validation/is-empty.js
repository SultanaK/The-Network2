// use as opposed to bringing in another library like Lodash. Validator will check for an empty string but isEmpty checks for the following:
const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

module.exports = isEmpty;
