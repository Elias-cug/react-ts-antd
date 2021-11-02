import React, { FC } from 'react';
import { Card, Button } from 'antd';
import Title from '@/components/Title';
import Counter from './components/Counter';
import Logger from './components/CounterLeader';
const ReactRedux: FC = () => {
  function updateInfo () {
    console.log('sss');
  }
  return (
    <>
      <Card className='card-common'>
        <Title title='计数器' />
        <Counter />
      </Card>
      <Card className='card-common'>
        <Title title='计数器领导' />
        <Logger />
      </Card>
      <Card className='card-common'>
        <Title title='用户模块模拟' />
        <Button onClick={updateInfo}>更新用户信息</Button>
      </Card>
    </>
  );
};
export default ReactRedux;
