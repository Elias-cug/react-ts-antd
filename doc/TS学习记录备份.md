## 回答一些问题

1. TS 是什么？

带有类型语法的 javascript，是一种强类型变成语言。功能比 js 只多不少。

2. TS 有什么好处？

2.1 开发的时候， ts 就能给出编译错误提示，js 中的错误是需要在运行的时候才能暴露出来
2.2 作为强类型语⾔，你可以明确知道数据的类型。代码可读性极强，⼏乎每个⼈都能理解
2.3 使用函数的时候就可以知道，传什么参数，参数是什么类型

## TS 基础

1. number string boolean array object null undefined
```ts
  let a: number = 1
```

2. enum 枚举
```ts
enum Response {
    No = 0,
    Yes = 1
}
```

3. type & interface
```ts
type AjaxMethod = 'GET' | 'POST'
```

```ts
interface Family {
  parent: string; // 表示必填
  son?: string;  // 表示可选
  readonly address: string; // 表示只读
}
```

4. 联合类型
```ts
type name: string | number = 1
```

5. typeof

获取定义好的类型
```ts
function toArray(x: number): Array<number> {
 return [x];
}
type Func = typeof toArray; // -> (x: number) => number[
```

6. keyof

keyof 操作可以用来获取一个对象中的所有 key 值
```ts
interface Person {
 name: string;
 age: number;
}
type K1 = keyof Person; // "name" | "age"
```

7. in

in 用来遍历枚举类型

```ts
type Keys = "a" | "b" | "c"
type Obj = {
 [p in Keys]: any
} // -> { a: any, b: any, c: any 
```

8. extends

类型继承
```ts
interface A {
  name: string;
}
interface B extends B {
  age: number;
}
```

9. Paritial<T>

将某个类型的属性全部变为可选项

10. Required<T>

将某个类型的属性全部变为必选项

## TS 进阶

1. type 和 interface 异同

重点：⽤interface描述数据结构，⽤type描述类型

2.1 都可以描述⼀个对象或者函数
```ts
interface Obj = {
  name: string;
}

interface setUser = {
  (name: string, age: number): void;
}

type User = {
 name: string
 age: number
};
type SetUser = (name: string, age: number)=> void;

```

2.2 都允许拓展（extends）

```ts
// interface extends interface
interface Name {
 name: string;
}
interface User extends Name {
 age: number;
}
// type extends type
type Name = {
 name: string;
}
type User = Name & { age: number };
// interface extends type
type Name = {
 name: string;
}
interface User extends Name {
 age: number;
}
// type extends interface
interface Name {
 name: string;
}
type User = Name & {
 age: number;
}
```

2.3 只有type可以做的

Type 可以声明基本类型别名，联合类型，元组等类型
```ts
// 基本类型别名
type Name = string
// 联合类型
interface Dog {
 wong();
}
interface Cat {
 miao();
}
type Pet = Dog | Cat
// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
// 当你想获取⼀个变量的类型时，使⽤ typeof
let div = document.createElement('div');
type B = typeof div

```

2. 如何基于一个已有类型，扩展出一个大部分内容相似，但是有部分区别的类型？

2.1 Pick Omit

```ts
interface Test {
 name: string;
 sex: number;
 height: string;
}
type Sex = Pick<Test, 'sex'>;
const a: Sex = { sex: 1 };
type WithoutSex = Omit<Test, 'sex'>;
const b: WithoutSex = { name: '1111', height: 'sss' };
```

2.2 Partial Required

2.3 泛型


3. 什么是泛型，泛型怎么使用？

3.1 泛型是指在定义函数、接⼝或类的时候，不预先指定具体的类型，使⽤时再去指定类型的⼀种特性。
3.2 可以把泛型理解为代表类型的参数
3.3 使用
```ts
interface Test<T = any> {
 userId: T;
}
type TestA = Test<string>;
type TestB = Test<number>;
const a: TestA = {
 userId: '111',
};
const b: TestB = {
 userId: 2222,
};
```

3.5 阅读
[参考](https://juejin.cn/post/6844904184894980104)

4. 泛型约束
[参考](https://juejin.cn/post/6844904184894980104)
## 原理

## TS 使用

1. 数组

```ts
const arrA: Array<string> = ['a', 'b', 'c']
const arrB: number[] = [1, 3, 5]
```
2. 枚举 注：会有默认值
```ts
enum Color {Red = 1, Green = 3, Blue = 5}
let c: Color = Color.Green;
```

3. object 注：一般通过数据结构定义
```ts
interface ObjType {
  name: string;
  age: number;
}
const obj: ObjectType = {name: 'Tom', age: 18}
```

4. 函数类型
```ts
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

type Func = (x: number, y: number) => boolean;
let myAdd: Func =
    function(x: number, y: number): number { return x + y; };
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