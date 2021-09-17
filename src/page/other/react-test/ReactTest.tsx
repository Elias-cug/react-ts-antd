import React, { FC, useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  // incrementAsync,
  incrementIfOdd,
  selectCount
} from '@/redux/slice/counterSlice';
import styles from '@/assets/css/counter.module.css';

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

const Counter: FC = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label='Increment value' onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        {/* <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button> */}
        <button className={styles.button} onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </div>
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
          <span>redux: </span>
        </h3>
        <Counter></Counter>
      </Card>
    </>
  );
};
export default ReactTest;
