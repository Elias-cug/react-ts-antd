import React, { FC } from 'react';
import { Card, Button } from 'antd';
import Title from '@/components/Title';

const AxiosSolution: FC = () => {
  return (
    <>
      <Card className='card-common'>
        <Title title='执行多个并发请求' />
        <Button>点击触发多个请求</Button>
      </Card>
      <Card className='card-common'>
        <Title title='限制请求个数方案' />
      </Card>
      <Card className='card-common'>
        <Title title='取消请求方案' />
      </Card>
      <Card className='card-common'>
        <Title title='请求失败后继续请求直到n次' />
      </Card>
    </>
  );
};
export default AxiosSolution;
