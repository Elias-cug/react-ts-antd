import React, { FC, useEffect, useState } from 'react';
import { useHistory, Prompt } from 'react-router-dom';
import { Button, Card, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount
} from '@/redux/slice/counterSlice';
import styles from '@/assets/css/counter.module.css';

interface ChildProps {
  triggerClick: (count: number) => void;
}

// 测试子组件调用父组件 --> 子组件
const ChildEmit: FC<ChildProps> = (props: ChildProps) => {
  let [count, setCount] = useState(0);
  const handleChildClick = function () {
    setCount(count + 1);
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

// 计数器组件
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
        <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button className={styles.button} onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </div>
  );
};

// 测试组件路由切换拦截
const RouterUpdate: FC = () => {
  const history = useHistory();
  function handleBack () {
    console.log('--------------goBack---start');
    history.goBack();
    console.log('--------------goBack---end');
  }
  return (
    <>
      <Input style={{ width: '200px', marginRight: '20px' }} />
      <Button onClick={handleBack}>返回</Button>
      {/* <Prompt
        when={true}
        message={() => {
          return true;
        }}
      ></Prompt> */}
    </>
  );
};

const ReactTest: FC = () => {
  useEffect(() => {
    const event = window.addEventListener('popstate', () => {
      return false;
    });
    return event;
  }, []);

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
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>测试监听路由离开</span>
        </h3>
        <RouterUpdate></RouterUpdate>
      </Card>
    </>
  );
};
export default ReactTest;
