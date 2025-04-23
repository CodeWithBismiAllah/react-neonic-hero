
// jest.setup.js
// jest.setup.js
import '@testing-library/jest-dom';



// Fix ReferenceError: SVGElement is not defined
if (typeof global.SVGElement === "undefined") {
  global.SVGElement = global.HTMLElement;
}

// Optional: define Jest globals if needed
if (typeof global.expect === "undefined") {
  const jestGlobals = require("@jest/globals");
  global.expect = jestGlobals.expect;
  global.describe = jestGlobals.describe;
  global.it = jestGlobals.it;
  global.test = jestGlobals.test;
  global.beforeEach = jestGlobals.beforeEach;
  global.afterEach = jestGlobals.afterEach;
  global.beforeAll = jestGlobals.beforeAll;
  global.afterAll = jestGlobals.afterAll;
}

console.log("✅ jest.setup.js is running...");
