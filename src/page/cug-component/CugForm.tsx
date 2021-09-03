import React, { useState, FC } from 'react';
import { Card, Select, Checkbox } from 'antd';
import { SelectProps } from 'antd/lib/index';
import CugMultiSelected from '@/components/multi-select/index';

const brFontNames = [
  {
    id: 'tiannana',
    text: '田娜娜'
  },
  {
    id: 'hanxiaoyu',
    text: '韩晓雨'
  },
  {
    id: 'liyisheng',
    text: '李义升'
  },
  {
    id: 'tanqinglian',
    text: '谭青廉'
  },
  {
    id: 'zhanghui',
    text: '张慧'
  },
  {
    id: 'chaochang',
    text: '超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长'
  }
];

export default function CugForm () {
  // 过滤函数
  const filterOption = function (value, option) {
    if (option.label.includes(value)) {
      return true;
    }
    return false;
  };
  return (
    <>
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>自定义表单元素</span>
        </h3>
        <div className='common-form'>
          <div>
            <span className='mr10'>多选: </span>
            <CugMultiSelected
              allowCreate={true}
              showSearch={true}
              maxTagCount={500}
              defaultValue='liyisheng'
              filterOption={filterOption}
            >
              {brFontNames.map(item => (
                <Select.Option key={item.id} value={item.id} label={item.text}>
                  {item.text}
                </Select.Option>
              ))}
            </CugMultiSelected>
          </div>
        </div>
      </Card>
    </>
  );
}
