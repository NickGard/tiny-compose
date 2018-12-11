# tiny-compose

[![source](https://badgen.net/npm/v/@ngard/tiny-compose)](https://www.npmjs.com/package/@ngard/tiny-compose)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-compose)](https://bundlephobia.com/result?p=@ngard/tiny-compose)
[![build status](https://badgen.net/travis/NickGard/tiny-compose)](https://travis-ci.org/NickGard/tiny-compose)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal composition utility. For when every byte counts!
Creates a new function that applies the arguments to the right-most function and applies the result of that call to the function to its left and so on for all functions passed. That function returns the result of these nested calls.

```js
compose(fn1, fn2, fn3)('yeah!')

// is equivalent to
fn1(fn2(fn3('yeah!')))
```

<hr/>

## Install

```bash
npm install @ngard/tiny-compose
```

## Syntax

```javascript
compose(/* function1 [, function2 [, ...] ] */);
```

## Parameters
`function1` - Any function

## Return
A new function that applies the arguments to the right-most function and applies the result of that call to the function to its left and so on for all functions passed. That function returns the result of these nested calls.

<hr/>

## Examples

```javascript
import { compose } from '@ngard/tiny-compose';

function biggerThanZero(n) {
  return Math.max(0, n);
}
function lessThanTen(n) {
  return Math.min(10, n);
}
const betweenZeroAndTen = compose(biggerThanZero, lessThanTen);

betweenZeroAndTen(4); // returns 4
betweenZeroAndTen(14); // returns 10
betweenZeroAndTen(-8); // returns 0
```

```javascript
import { compose } from '@ngard/tiny-compose';

function double(n) {
  return 2 * n;
}
function addFive(n) {
  return 5 + n;
}
const addFiveAndDouble = compose(double, addFive);
addFiveAndDouble(4); // 18

const doubleAndAddFive = compose(addFive, double);
doubleAndAddFive(4); // 13
```
