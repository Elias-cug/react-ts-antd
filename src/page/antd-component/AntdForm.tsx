import React, { useState, FC } from 'react';
import { Select, Input, Switch, Rate, DatePicker, Space, Card } from 'antd';

const selectOptions = [
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

// 单选
const AntdSelect: FC = () => {
  return (
    <>
      <Select className='form-item' defaultValue='liyisheng'>
        {selectOptions.map(item => (
          <Select.Option key={item.id} value={item.id}>
            {item.text}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

// 多选
const AntdMultiSelect: FC = () => {
  return (
    <>
      <Select defaultValue={['liyisheng']} showSearch={true} showArrow={true} mode='multiple'>
        {selectOptions.map(item => (
          <Select.Option key={item.id} value={item.id} label={item.text}>
            {item.text}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

// 输入框
const AntdInput: FC = () => {
  return (
    <>
      <Input placeholder='请输入姓名'></Input>
    </>
  );
};

// 开关
const AntdSwitch: FC = () => {
  return (
    <>
      <div>
        <Switch defaultChecked />
      </div>
    </>
  );
};

// 评分
const AntdRate: FC = () => {
  return (
    <>
      <Rate />
    </>
  );
};

// 日期
const AntdDatePicker: FC = () => {
  return (
    <>
      <DatePicker />
    </>
  );
};

const FormSelect: FC = () => {
  return (
    <>
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>React表单元素</span>
        </h3>
        <div className='common-form'>
          <div>
            <label className='label mr10'>单选: </label>
            <div className='form-item'>
              <AntdSelect></AntdSelect>
            </div>
          </div>
          <div>
            <label className='label mr10'>多选: </label>
            <div className='form-item'>
              <AntdMultiSelect></AntdMultiSelect>
            </div>
          </div>
          <div>
            <label className='label mr10'>输入框: </label>
            <div className='form-item'>
              <AntdInput></AntdInput>
            </div>
          </div>
          <div>
            <label className='label mr10'>switch: </label>
            <div className='form-item'>
              <AntdSwitch></AntdSwitch>
            </div>
          </div>
          <div>
            <label className='label mr10'>评分: </label>
            <div className='form-item'>
              <AntdRate></AntdRate>
            </div>
          </div>
          <div>
            <label className='label mr10'>日期: </label>
            <div className='form-item'>
              <AntdDatePicker></AntdDatePicker>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FormSelect;
