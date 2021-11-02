import React, { FC, useState } from 'react';
import { Card, Button } from 'antd';
import Title from '@/components/Title';
import Counter from './components/Counter';
import Logger from './components/CounterLeader';
import { useAppSelector, useAppDispatch } from '@/hooks/redux-hooks';
import { updateReducer, selectUser } from '@/redux/react-redux-test/reducers/userReducer';

const ReactRedux: FC = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  function updateInfo () {
    const newUserInfo = {
      userId: 2,
      username: 'xy',
      email: 'xy@163.com',
      phone: '10010',
      locale: 'en-us'
    };
    dispatch(updateReducer(newUserInfo));
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
        <pre>{JSON.stringify(user)}</pre>
      </Card>
    </>
  );
};
export default ReactRedux;
