# Javascript function currying #

## Example of a curried function declaration ##

```js

  // Declaring a curried function
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

```

## Same example but with a normal function ##

```js

  function fn(a, b, c) {
    return a + b + c;
  }

```