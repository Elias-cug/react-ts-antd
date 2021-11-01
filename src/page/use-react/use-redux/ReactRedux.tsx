import React, { FC } from 'react';
import { Card, Button } from 'antd';
import Title from '@/components/Title';
const ReactRedux: FC = () => {
  function updateInfo () {
    console.log('sss');
  }
  return (
    <>
      <Card className='card-common'>
        <Title title='用户模块模拟' />
        <Button onClick={updateInfo}>更新用户信息</Button>
      </Card>
      <Card className='card-common'>
        <Title title='日志模块模拟' />
      </Card>
    </>
  );
};
export default ReactRedux;
