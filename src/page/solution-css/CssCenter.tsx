import React, { FC } from 'react';
import { Card } from 'antd';
import Title from '@/components/Title';
import './css-center.less';

const CssCenter: FC = () => {
  return (
    <>
      <Card className='card-common'>
        <Title title='水平居中 - 行内元素' />
        <div className='center-wrap center-inline-block'>清平乐</div>
      </Card>
      <Card className='card-common'>
        <Title title='水平居中 - 块级元素' />
        <div className='center-wrap center-block'>
          <div className='center-block-child'>会昌</div>
        </div>
      </Card>
      <Card className='card-common'>
        <Title title='水平居中 - flex' />
        <div className='center-wrap center-flex'>
          <div>东方欲晓，</div>
          <div>莫道君行早</div>
        </div>
      </Card>
      <Card className='card-common'>
        <Title title='垂直居中 - 行内 - 单行' />
        <div className='center-wrap center-v-single'>踏遍青山人未老, 风景这边独好</div>
      </Card>
      <Card className='card-common'>
        <Title title='垂直居中 - 行内 - 多行' />
        <div className='center-table'>
          <p className='center-v-multi'>
            <span>会昌城外高峰，</span> <br />
            <span>颠连直接东溟</span>
          </p>
        </div>
      </Card>
      <Card className='card-common'>
        <Title title='垂直居中 - 行内 - flex' />
        <div className='center-wrap center-v-flex'>
          <p className='center-v-multi'>
            <span>战士指看南粤，</span> <br />
            <span>更加郁郁葱葱</span>
          </p>
        </div>
      </Card>
      <Card className='card-common'>
        <Title title='垂直居中 - 块级 - flex' />
        <div className='center-wrap center-v-flex'>
          <p className='center-v-multi'>
            <span>战士指看南粤，</span> <br />
            <span>更加郁郁葱葱</span>
          </p>
        </div>
      </Card>
    </>
  );
};
export default CssCenter;
