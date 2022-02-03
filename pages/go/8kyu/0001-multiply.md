# Multiply

[Go to the battlefield](https://www.codewars.com/kata/multiply/train/go)

### Instructions

The code does not execute properly. Try to figure out why.

```go
package multiply

func Multiply(a, b int) int {
  a * b
}
```

### Test Cases

```go
package multiply_test

import (
    "github.com/onsi/ginkgo"
    "github.com/onsi/gomega"
    "codewarrior/multiply"
)

var _ = Describe("multiply method", func() {
  It("should multiply integers", func() {
    Expect(Multiply(1, 1)).To(Equal(1))
    Expect(Multiply(1, 0)).To(Equal(0))
    Expect(Multiply(2, 5)).To(Equal(10))
    Expect(Multiply(5, 10)).To(Equal(50))
  })
})
```

### Solution

```go
package multiply

func Multiply(a, b int) int {
 return a * b
}
```

### Discourse

这一道题可以说是非常的简单啦，考的就是一个函数的返回值。原题中函数定义时标记了返回一个 `int` 值，但是函数中只进行了计算却没有将计算结果返回。
