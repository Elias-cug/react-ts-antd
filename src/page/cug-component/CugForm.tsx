import React, { FC } from 'react';
import { Card, Select } from 'antd';
import MultiTreeSelect from '@/components/multi-tree-select';
// import CheckboxOption from '@/components/multi-select/CheckboxOption';
import { brFontNames } from '@/api/optionsMock';

// 树形多选
const CugMultiTreeSelect: FC = () => {
  const onChange = value => {
    console.log('--测试onchange：', value);
  };
  const onSelect = (value, option) => {
    console.log('--测试onSelect：', value, option);
  };
  const onDeselect = (value, option) => {
    console.log('--测试onDeselect：', value, option);
  };
  const onSearch = value => {
    console.log('--测试onSearch：', value);
  };
  return (
    <>
      <MultiTreeSelect
        className='form-item'
        options={brFontNames}
        defaultValue={['liyisheng']}
        placeholder={'请选择标签'}
        showSearch={false}
        allowCreate={false}
        loading={false}
        onChange={onChange}
        onSelect={onSelect}
        onDeselect={onDeselect}
        onSearch={onSearch}
      ></MultiTreeSelect>
    </>
  );
};

// CUG 组件
const CugForm: FC = () => {
  return (
    <div className='cug-component'>
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>自定义表单元素</span>
        </h3>
        <div className='common-form'>
          <div>
            <span className='label large-label mr10'>树多选改造: </span>
            <div className='form-item'>
              <CugMultiTreeSelect></CugMultiTreeSelect>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CugForm;
