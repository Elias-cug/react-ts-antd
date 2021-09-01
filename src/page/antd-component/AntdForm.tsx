import React, { FC } from 'react';
import { Select, Input, Switch, Rate, DatePicker, Space, Card } from 'antd';
const { Option } = Select;

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
  }
];

// 单选
const AntdSelect = () => {
  return (
    <>
      <span className='mr10'>单选: </span>
      <Select className='form-item' defaultValue='tiannana'>
        {selectOptions.map(item => (
          <Option key={item.id} value={item.id}>
            {item.text}
          </Option>
        ))}
      </Select>
    </>
  );
};

// 多选
const AntdMultiSelect = () => {
  return (
    <>
      <span className='mr10'>多选: </span>
      <Select className='form-item' defaultValue={['tiannana']} mode='multiple'>
        {selectOptions.map(item => (
          <Option key={item.id} value={item.id}>
            {item.text}
          </Option>
        ))}
      </Select>
    </>
  );
};

// 输入框
const AntdInput = () => {
  return (
    <>
      <span className='mr10'>输入框：</span>
      <Input className='form-item' placeholder='请输入姓名'></Input>
    </>
  );
};

// 开关
const AntdSwitch = () => {
  return (
    <>
      <span className='mr10'>开关：</span>
      <Switch defaultChecked />
    </>
  );
};

// 评分
const AntdRate = () => {
  return (
    <>
      <span className='mr10'>评分：</span>
      <Rate />
    </>
  );
};

// 日期
const AntdDatePicker = () => {
  return (
    <>
      <span className='mr10'>日期：</span>
      <Space direction='vertical'>
        <DatePicker />
      </Space>
    </>
  );
};

const FormSelect = () => {
  return (
    <>
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>React表单元素</span>
        </h3>
        <div className='antd-test'>
          <div>
            <AntdSelect></AntdSelect>
          </div>
          <div>
            <AntdMultiSelect></AntdMultiSelect>
          </div>
          <div>
            <AntdInput></AntdInput>
          </div>
          <div>
            <AntdSwitch></AntdSwitch>
          </div>
          <div>
            <AntdRate></AntdRate>
          </div>
          <div>
            <AntdDatePicker></AntdDatePicker>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FormSelect;
