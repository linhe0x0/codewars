# Multiply

[Go to the battlefield](https://www.codewars.com/kata/multiply/train/javascript)

### Instructions

The code does not execute properly. Try to figure out why.

```js
function multiply(a, b){
  a * b
}
```

### Test Cases

```js
Test.assertEquals(multiply(1,1), 1);
Test.assertEquals(multiply(2,1), 2);
Test.assertEquals(multiply(2,2), 4);
Test.assertEquals(multiply(3,5), 15);
```

### Solution

```js
function multiply(a, b){
  return a * b
}
```

### Discourse

这一道题可以说是非常的简单啦，考的就是一个函数的返回值。原题中只进行了计算却没有将计算结果返回。

### Improvement

回答到上一步基本上就已经解决了这个问题了，但是作为一个经验丰富的工程师，需要做的远不止只是解决问题，还要对各种边际情况进行考虑和兼容。

```js
function multiply(a, b){
  if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
    return 0
  }

  return a * b
}
```

这里我们对变量 `a` 和 `b` 的边际情况进行了处理，我们这里判断如果是非法值返回了 0，你当然也可以选择直接抛出一个错误。

### Further improvement

```js
const multiply = function multiply(a, b){
  if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
    return 0
  }

  return a * b
}
```

我们甚至可以更进一步，将函数声明更换为函数表达式，因为总所周知，在 `JS` 中函数声明的形式会导致『变量提升』，将该函数提升至当前函数级作用域的顶部，有时候会导致容易迷惑，使得代码不便于被理解和调试。
