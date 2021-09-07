## 回答一些问题

1. TS 是什么？

带有类型语法的 javascript，是一种强类型变成语言。功能比 js 只多不少。

2. TS 有什么好处？

2.1 开发的时候， ts 就能给出编译错误提示，js 中的错误是需要在运行的时候才能暴露出来
2.2 作为强类型语⾔，你可以明确知道数据的类型。代码可读性极强，⼏乎每个⼈都能理解
2.3 使用函数的时候就可以知道，传什么参数，参数是什么类型

## TS 基础

1. 基础类型
number string boolean array object null undefined

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

5. typeof 获取定义好的类型

```ts
function toArray(x: number): Array<number> {
 return [x];
}
type Func = typeof toArray; // -> (x: number) => number[
```

6. keyof ⽤来⼀个对象中的所有 key 值

```ts
interface Person {
 name: string;
 age: number;
}
type K1 = keyof Person
```


7. extends 类型继承

```ts
interface A {
  name: string;
}
interface B extends B {
  age: number;
}
```

8. Paritial<T>

将某个类型的属性全部变为可选项

9. Required<T>

将某个类型的属性全部变为必选项


## TS 进阶

1. type 和 interface 异同

重点：interface 重点描述数据结构，type 描述类型

1.1 都可以描述一个对象或函数
1.2 都允许使用 extends，两两组合都可以相互 extends
1.3 有一些只有 type 可以做
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
2.1 pick
```ts
// 原始类型
interface TState {
	name: string;
	age: number;
	like: string[];
}
// 如果我只想要name和age怎么办，最粗暴的就是直接再定义一个（我之前就是这么搞得）
interface TSingleState {
	name: string;
	age: number;
}
// 这样的弊端是什么？就是在Tstate发生改变的时候，TSingleState并不会跟着一起改变，所以应该这么写
interface TSingleState extends Pick<TState, "name" | "age"> {};
```
2.2 Paritial

3. 什么是泛型，泛型怎么使用？
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

4. 泛型约束

5. const 和 readonly

const 定义变量，readonly 定义属性

## 原理

## TS 使用

1. 定义变量及使用
1.1 数组
```ts
let arrA: Array<string> = ['a', 'b', 'c']
let arrB: number[] = [1, 3, 5]
```
1.2 对象
```ts
interface ObjType {
  name: string;
  age: number;
}
const obj: ObjectType = {name: 'Tom', age: 18}
```

1.3 函数
```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
}

let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };

type FuncType = (a: number) => number
let compare: funcType = (x: number, y: number): boolean => {
  return  x > y
}
```

1.4 class

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
// FC是简写
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

