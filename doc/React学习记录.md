## 基础

## 进阶

## 好的用法

1. 子组件声明

使用Parent.Child形式的 JSX 可以让节点父子关系更加直观, 它类似于一种命名空间的机制，可以避免命名冲突，ant design中就大量使用了这类形式。相比ParentChild这种命名方式, Parent.Child更为优雅些。如：

```ts
import React, {PropsWithChildren} from 'react'
export interface LayoutProps {}
export interface LayoutHeaderProps {}

export function Layout(props: PropsWithChildren<LayoutProps>) => {
  return (
    <div className="layout"> {props.children} </div>
  )
}

Layout.Header = (props: propsWidthChildren<LayoutHeaderProps>) => {
  return (
    <div className="header"> {props.children} </div>
  )
}

function TestLayout () {
  return (
    <Layout>
      <Layout.Header>header</Layout.Header>
    </Layout>
  )
}

```