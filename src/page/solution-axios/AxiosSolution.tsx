import React, { FC } from 'react';
import { Card } from 'antd';
import Title from '@/components/Title';

const AxiosSolution: FC = () => {
  return (
    <>
      <Card className='card-common'>
        <Title title='执行多个并发请求' />
      </Card>
      <Card className='card-common'>
        <Title title='限制请求个数方案' />
      </Card>
      <Card className='card-common'>
        <Title title='取消请求方案' />
      </Card>
    </>
  );
};
export default AxiosSolution;
