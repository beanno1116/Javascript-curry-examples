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

## Invoking the curriedFn function example ##

```js

  curriedFn(11)(22)(33);
  // Output: 66

```

## Same example but with a normal function ##

```js

  function fn(a, b, c) {
    return a + b + c;
  }

```

## Invoking the nomral function example ##

```js

  fn(11,22,33);
  // Output: 66

```