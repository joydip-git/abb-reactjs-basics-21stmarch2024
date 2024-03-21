define(["./models/developer", "./models/hr", "./repository/employees"], function (_developer, _hr, _employees) {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // const { Developer } = require('./models/developer')
  // const { Hr } = require('./models/hr')
  // const { employees } = require('./repository/employees')
  var anilDeveloper = new _developer.Developer(1, "anil", 1000, 2000, 3000, 4000);
  var sunilHr = new _hr.Hr(2, "sunil", 1500, 2500, 3500, 4500);
  _employees.employees.push(anilDeveloper);
  _employees.employees.push(sunilHr);
  var _iterator = _createForOfIteratorHelper(_employees.employees),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var employee = _step.value;
      var salary = employee.calculateSalary();
      console.log("".concat(employee.name, " with id:").concat(employee.id, " has got ").concat(salary, " as salary"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});