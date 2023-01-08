/*

  Currying exists in multiple language. Possible in Javascript because of javascript closures. 
  CURRYING: is the process of transforming functions with specific number of arguments into a sequence of nested functions

*/

/*

  DESCRIPTION:
    function curriedFn(a) {
      // Argument "a" exists here
      return function(b) {
        // Argument "a" and "b" exist here
        return function(c) {
          // Argument "a", "b" and "c" exist here
          return a + b + c;
        }
      }
    }

    VISUALIZED:
      outermostFn(11) // curriedFn(a) { ... }
      middleFn(22) // function(b) { ... }
      innermostFn(33) // function(c) { ... }

    SAME AS:
      const firstCall = curriedFn(11)
      const secondCall = firstCall(22)
      const lastCall = secondCall(33)

*/

// Curried function example
function curriedFn(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

// How to call a curried function
console.log("Calling Curried function: curriedFn(11)(22)(33)")
console.log(`Output: ${curriedFn(11)(22)(33)}`);
// Output 66

// Same function as normal function
function fn(a, b, c) {
  return a + b + c;
}

// How to call normal function
console.log("Calling normal function fn(11,22,33)");
console.log(`Output: ${fn(11, 22, 33)}`);
// Output 66

// Arrow function example
const curriedArrowFn = (a) => (b) => (c) => a + b + c;

// How to call curried arrow function
console.log("Calling Curried function: curriedArrowFn(11)(33)(55)")
console.log(`Output: ${curriedArrowFn(11)(33)(55)}`);
// Output 99

// Curried function example
function myCurriedFn(x) {
  return function (y) {
    return function (z) {
      return function (w) {
        return x * y * z * w;
      }
    }
  }
}

// Calling myCurriedFn(3)(6)(3)(9)
console.log("Calling myCurriedFn(3)(6)(3)(9)")
console.log(`Output: ${myCurriedFn(3)(6)(3)(9)}`);
// Output 486

// Partial application function example
function myPartialApplicationFn(x) {
  return function (y, z) { // Passing two arguments instead of one
    return function (w) {
      return x * y * z * w;
    }
  }
}

/*

  Key difference between partial application and currying is the number of parameters.
  Curried functions accepts only 1 parameter; Not the case in partial application
  **RULE**
    returned functions must accept less parameters
  
  if you see a curry like call where one function calls have more than one parameter it is a partial application not a curried function

*/

// Calling myPartialApplicationFn(3)(6)(3)(9)
console.log("Calling myPartialApplicationFn(3)(6,3)(9)")
console.log(`Output: ${myPartialApplicationFn(3)(6, 3)(9)}`);
// Output 486