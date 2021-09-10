import React, { FC, useEffect, useState } from 'react';
import { Button, Card } from 'antd';

interface ChildProps {
  triggerClick: (count: number) => void;
}

// 测试子组件调用父组件 --> 子组件
const ChildEmit: FC<ChildProps> = (props: ChildProps) => {
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
// 测试子组件调用父组件 --> 子组件
const ParentReceive: FC = () => {
  const [count, setCount] = useState(0);
  const handleTriggerClick = function (count: number) {
    setCount(count);
  };
  return (
    <>
      <ChildEmit triggerClick={handleTriggerClick}></ChildEmit>
      <span>count: {count}</span>
    </>
  );
};

// 测试父组件调用子组件 --> 父组件
const ParentEmit: FC = () => {
  return (
    <>
      <div></div>
    </>
  );
};

// 测试父组件调用子组件 --> 子组件
const ChildReceive: FC = () => {
  return (
    <>
      <div></div>
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
        <ParentReceive></ParentReceive>
      </Card>
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>测试父组件调用子组件: </span>
        </h3>
        <ParentEmit></ParentEmit>
      </Card>
    </>
  );
};
export default ReactTest;
