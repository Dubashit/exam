// import {isComplex, isFraction} from "./variant1";
const { isComplex, isFraction } = require("../libs/variant1");

function isRange(x) {
  return (x && x.constructor.prototype.isRange === true) || false
}

function isIndex(x) {
  return (x && x.constructor.prototype.isIndex === true) || false
}

function isBoolean(x) {
  return typeof x === 'boolean'
}

function isResultSet(x) {
  return (x && x.constructor.prototype.isResultSet === true) || false
}

function isHelp(x) {
  return (x && x.constructor.prototype.isHelp === true) || false
}

function isFunction(x) {
  return typeof x === 'function'
}

function isDate(x) {
  return x instanceof Date
}

function isRegExp(x) {
  return x instanceof RegExp
}

function isObject(x) {
  return !!(x &&
    typeof x === 'object' &&
    x.constructor === Object &&
    !isComplex(x) &&
    !isFraction(x))
}

function isNull(x) {
  return x === null
}

module.exports = {
  isRange,
  isIndex,
  isBoolean,
  isResultSet,
  isHelp,
  isFunction,
  isDate,
  isRegExp,
  isObject,
  isNull
}