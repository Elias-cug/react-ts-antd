import React, { FC, useEffect, useState } from 'react';
import { Button, Card } from 'antd';

interface ChildProps {
  triggerClick: (count: number) => void;
}
// 测试子组件事件触发到父组件 --> 子组件
const Child: FC<ChildProps> = (props: ChildProps) => {
  console.log('child渲染了');
  let [count, setCount] = useState(0);
  const handleChildClick = function () {
    setCount(count + 1);
    // props.triggerClick(count);
  };
  useEffect(() => {
    props.triggerClick(count);
  }, [count]);
  return (
    <>
      <Button onClick={handleChildClick}>增加</Button>
    </>
  );
};

// 测试子组件事件触发到父组件 --> 父组件
const Parent: FC = () => {
  const [count, setCount] = useState(0);
  const handleTriggerClick = function (count: number) {
    setCount(count);
  };
  return (
    <>
      <Child triggerClick={handleTriggerClick}></Child>
      <span>count: {count}</span>
    </>
  );
};

const ReactTest: FC = () => {
  return (
    <>
      <Card className='card-common mb10'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>测试子组件事件触发到父组件: </span>
        </h3>
        <Parent></Parent>
      </Card>
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>测试父组件调用子组件: </span>
        </h3>
        <Parent></Parent>
      </Card>
    </>
  );
};
export default ReactTest;
