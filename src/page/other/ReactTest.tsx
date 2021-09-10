import React, { FC, useEffect, useState } from 'react';

interface ChildProps {
  triggerClick: (event: MouseEvent, data: string) => void;
}
const Child: FC<ChildProps> = (props: ChildProps) => {
  function handleChildClick(e) {
    props.triggerClick(e, 'aa');
  }
  return (
    <>
      <div onClick={handleChildClick}>你好</div>
    </>
  );
};

const Parent: FC = () => {
  const [data, setData] = useState('');
  function handleTriggerClick(e, data) {
    setData(data);
  }
  return (
    <>
      <Child triggerClick={handleTriggerClick}></Child>
      <div>{data}</div>
    </>
  );
};

const ReactTest: FC = () => {
  return (
    <>
      <div>r-子组件的事件触发到父组件：</div>
      <Parent></Parent>
    </>
  );
};
export default ReactTest;
