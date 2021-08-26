## 回答一些问题

1. TS 是什么？

带有类型语法的 javascript，是一种强类型变成语言。功能比 js 只多不少。

2. TS 有什么好处？

2.1 开发的时候， ts 就能给出编译错误提示，js 中的错误是需要在运行的时候才能暴露出来
2.2 作为强类型语⾔，你可以明确知道数据的类型。代码可读性极强，⼏乎每个⼈都能理解
2.3 使用函数的时候就可以知道，传什么参数，参数是什么类型

## TS 基础

## TS 进阶

1. type 和 interface 异同

2. 如何基于一个已有类型，扩展出一个大部分内容相似，但是有部分区别的类型？

3. 什么是泛型，泛型怎么使用？

## 原理

## TS 使用

1. 变量中使用

```ts
// 基础类型
const a: string = 'AA' // 可以使用模板字符串
const b: number = 123
const c: boolean = false

// 数组
const arrA: Array<string> = ['a', 'b', 'c']
const arrB: number[] = [1, 3, 5]

// 元组
let x: [string, number];
x = ['hello', 10]; // OK
x = [10, 'hello']; // Error

// 枚举 注：会有默认值
enum Color {Red = 1, Green = 3, Blue = 5}
let c: Color = Color.Green;

// any
let notSure: any = 'AAA'

// void 函数无返回值
function fn(): void {

}

// undefined 或 null
let u: undefined = undefined;
let n: null = null;

// object 注：object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
interface ObjType {
  name: string;
  age: number;
}
const obj: ObjectType = {name: 'Tom', age: 18}

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };
```

2. 函数中使用

```ts
// 普通函数
function fn(arg: number): number {
  const a: number = 123
  return a
}

// 函数表达式
const getCount = function(arg: number): number {
  const a: number = 123
  return a
}

// 箭头函数
const getCount = (arg: number): number => {
  const a: number = 123
  return a
}

// class
class Person {
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public readonly name: name;


}
```

## React 中使用 TS

1. 创建一个使用 TS 语法的 React 项目

```ts
npx create-react-app react-ts --template typescript
```

2. React 中可以直接使用的一些类型

2.1 声明函数式组件：React.FunctionComponent<p: T>

```ts
import React from 'react'
// 命名规范：ComponentName|Props
interface EditorProps {
  detail: string
}
const Editor: React.FC<props: EditorProps> = (props) => {
  const {detail} = props
  return (<div>{detail}</div>)
}

// 也可以这样
const Editor: (props: EditorProps) => {
  const {detail} = props
  return (<div>{detail}</div>)
}
```

2.2 设置children：React.ReactNode

```ts
import React from 'react'
interface CardProps {
  title: string;
  children: React.ReactNode;
}
```

2.3 

