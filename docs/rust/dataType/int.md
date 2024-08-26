# 整数类型

## 整数表示

在 `Node.js` 中的数字类型都被表示为双精度浮点数（64 位），没有特定的整数类型。因此整数的范围受到 `IEEE 754 标准`的限制，即 `-2^53` 到 `2^53` 之间的整数可以精确表示，超出这个范围的整数可能会失去精度。 `Node.js`  使用 `Number` 类型来表示所有数字，包括整数和浮点数。

```js
let integer = 42; 
let integer = -42; 
let integer = 0; 
```

在`Rust`中，根据整数的大小（位数）、符号（是否可为负整数）可将其分为如下类型

| 长度       | 有符号类型 | 无符号类型 |
| :--------- | :--------- | :--------- |
| 8 位       | i8         | u8         |
| 16 位      | i16        | u16        |
| 32 位      | i32        | u32        |
| 64 位      | i64        | u64        |
| 128 位     | i128       | u128       |
| 视架构而定 | isize      | usize      |

其中，`无符号类型` 代表数字只能取正整数和0。`有符号类型` 代表数字可以取正整数、负整数和0。

每个有符号类型规定的数字范围是 `-(2n - 1) ~ 2n - 1 - 1`，其中 `n` 是该定义形式的位长度。因此 `i8` 可存储数字范围是 `-(27) ~ 27 - 1`，即 `-128 ~ 127`。无符号类型可以存储的数字范围是 `0 ~ 2n - 1`，所以 `u8` 能够存储的数字为 `0 ~ 28 - 1`，即 `0 ~ 255`。

此外，`isize` 和 `usize` 类型取决于程序运行的计算机 CPU 类型： 若 CPU 是 32 位的，则这两个类型是 32 位的，同理，若 CPU 是 64 位，那么它们则是 64 位。

> `Rust` 整型默认使用 `i32`，例如 let i = 1，那 i 就是 i32 类型，因此你可以首选它，同时该类型也往往是性能最好的。`isize` 和 `usize` 的主要应用场景是用作集合的索引。

```rs
// 有符号整数
let signed_integer: i8 = -10; // 8位
let signed_integer: i16 = -500; // 16位
let signed_integer: i32 = -10_000; // 32位
let signed_integer: i64 = -1_000_000; // 64位

// 无符号整数
let unsigned_integer: u8 = 10; // 8位
let unsigned_integer: u16 = 500; // 16位
let unsigned_integer: u32 = 10_000; // 32位
let unsigned_integer: u64 = 1_000_000; // 64位
```

> 在 Rust 中，数字可以使用 `_` 作为可视分隔符来提高可读性，编译器在处理数值时会忽略这些 `_`。

## 整数溢出

有些同学可能比较疑惑，假设我给一个数的类型设置成`u8`，它的范围是`0-255`，那我给它范围之外的值，会发生什么呢？

其实这个行为叫`整数溢出`。我们先看在`Node.js`会发生什么？

```js
let maxInt = Math.pow(2, 53) - 1; // 最大整数值
console.log(maxInt); // 输出 9007199254740991

let overflowed = maxInt + 1; // 整数溢出发生
console.log(overflowed); // 输出 -9007199254740992，即溢出后的环绕结果

let minInt = -Math.pow(2, 53) + 1; // 最小整数值
console.log(minInt); // 输出 -9007199254740991

let underflowed = minInt - 1; // 整数溢出发生
console.log(underflowed); // 输出 9007199254740992，即溢出后的环绕结果
```

由此可见，当进行整数运算时，如果结果超出了 `Node.js` 可以表示的范围，则会发生溢出，这时候 `Node.js` 会将结果环绕到可表示范围内的值。

在 `Rust` 中，校验会更严格一些，整数溢出通常被认为是一种错误，因此 `Rust` 在默认情况下会进行溢出检查，以确保程序的安全性。`Rust` 提供了两种处理整数溢出的方式：

1. **Debug 模式下的溢出检查**：
   在 `Rust` 的 `Debug` 模式下，默认会对整数运算进行溢出检查。如果发生了溢出，程序将会 `panic`，并打印出相关的错误信息，以帮助开发者调试问题。

2. **Release 模式下的溢出处理**：
   在 `Rust` 的 `Release` 模式下，默认情况下整数运算不会进行溢出检查，而是会发生“包装”（wrapping）。这意味着整数溢出会导致结果的环绕，即超出整数表示范围的值会回到该范围内，不会引发`panic`。

```rs
fn main() {
  let mut  a:u8 = 255;
  a = a + 1;
  println!("{}", a); // 在 Debug 模式下会 panic，Release 模式 输出为 0
}
```

为了解决整数溢出的问题，`Rust` 还提供了一些显示地处理整数溢出的方法，以便开发者能够更加灵活地控制溢出情况。这些方法包括：

- 使用 `wrapping_*` 系列方法进行包装操作，例如 `wrapping_add`、`wrapping_sub`、`wrapping_mul` 等，这些方法会执行对应的整数运算并在溢出时进行包装。
- 使用 `checked_*` 系列方法进行检查操作，例如 `checked_add`、`checked_sub`、`checked_mul` 等，这些方法会返回 `Option` 类型，当发生溢出时返回 `None`，否则返回 `Some(result)`。

```rust
fn main() {
    let x: u8 = 255;
    let y = x + 1; // 在 Debug 模式下会 panic，Release 模式下会进行包装

    println!("x: {}", x);
    println!("y: {}", y);

    let z = x.wrapping_add(1); // 使用包装操作
    println!("z: {}", z);

    let checked_result = x.checked_add(1); // 使用检查操作
    match checked_result {
        Some(result) => println!("Checked result: {}", result),
        None => println!("Overflow occurred"),
    }
}
```

在以上示例中，当 `x` 为 255 时，将其加 1 会导致溢出。在 Debug 模式下会导致 panic，而在 Release 模式下会进行包装。通过使用 `wrapping_add` 方法可以进行包装处理，而使用 `checked_add` 方法可以进行检查操作，并根据返回结果进行相应的处理。

## 整数字面量

`Rust` 和 `JavaScript` 在整数字面量方面大体相同，都支持以下方式：

| 数字字面量       | 示例        |
| :--------------- | :---------- |
| 十进制           | 98_222      |
| 十六进制         | 0xff        |
| 八进制           | 0o77        |
| 二进制           | 0b1111_0000 |

由于在许多系统级编程和底层操作中，需要对字节进行精确的操作，包括位掩码、位移等。因此，`Rust` 提供了直接表示字节的整数字面量`b`，以简化这些操作的编写。

```rs
let byte: u8 = b'A'; // 字节字面量，表示 ASCII 字符 'A' 对应的字节值
```


