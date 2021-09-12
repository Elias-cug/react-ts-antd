import React, { FC } from 'react';
import { Card, Select } from 'antd';
import MultiSelected from '@/components/multi-select/index';
import MultiTreeSelect from '@/components/multi-tree-select';
// import CheckboxOption from '@/components/multi-select/CheckboxOption';
import { brFontNames } from '@/api/optionsMock';

// 多选
const CugMultiSelected: FC = () => {
  const filterOption = function (value, option) {
    if (option.label.includes(value)) {
      return true;
    }
    return false;
  };
  return (
    <>
      <span className='mr10'>多选: </span>
      <MultiSelected
        allowCreate={true}
        showSearch={true}
        maxTagCount={500}
        defaultValue='liyisheng'
        filterOption={filterOption}
      >
        {brFontNames.map(item => (
          <Select.Option key={item.value} value={item.value} label={item.label}>
            {item.label}
          </Select.Option>
        ))}
      </MultiSelected>
    </>
  );
};

// 树形多选
const CugMultiTreeSelect: FC = () => {
  return (
    <>
      <span className='mr10'>多选: </span>
      <MultiTreeSelect
        className='form-item'
        options={brFontNames}
        showSearch={true}
        allowCreate={true}
      ></MultiTreeSelect>
    </>
  );
};

// CUG 组件
const CugForm: FC = () => {
  return (
    <>
      <Card className='card-common'>
        <h3 className='commom-h3 mb8'>
          <em className='decorative-block'></em>
          <span>自定义表单元素</span>
        </h3>
        <div className='common-form'>
          <div>
            <CugMultiSelected></CugMultiSelected>
          </div>
          <div>
            <CugMultiTreeSelect></CugMultiTreeSelect>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CugForm;
