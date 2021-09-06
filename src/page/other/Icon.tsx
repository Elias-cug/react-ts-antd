import React, { FC } from 'react';
import { Card } from 'antd';

const icons = [
  {
    title: '复制',
    className: 'icon-copy'
  },
  {
    title: '搜索',
    className: 'icon-search'
  },
  {
    title: '搜索',
    className: 'icon-select-arrow'
  },
  {
    title: '搜索',
    className: 'icon-remove'
  },
  {
    title: '搜索',
    className: 'icon-input-close'
  },
  {
    title: '搜索',
    className: 'icon-close'
  }
];

const Icon: FC = () => {
  return (
    <div className='other-icon'>
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>自定义表单元素</span>
        </h3>
        <div className='icon-wrap'>
          {icons.map(item => {
            return (
              <div key={item.className} className='icon-item'>
                <i className={item.className}></i>
                <span className='icon-title'>{item.className}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Icon;
