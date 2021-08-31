import React, { FC } from 'react';
import { Select, Input } from 'antd';
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

const AntdSelect = () => {
  return (
    <>
      <span>单选: </span>
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

const AntdMultiSelect = () => {
  return (
    <>
      <span>多选: </span>
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

const AntdInput = () => {
  return (
    <>
      <span>输入框：</span>
      <Input className='form-item' placeholder='请输入姓名'></Input>
    </>
  );
};

const FormTest = () => {
  return (
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
    </div>
  );
};

export default FormTest;
