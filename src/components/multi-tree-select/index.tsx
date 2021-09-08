import React, { FC } from 'react';
import { TreeSelect } from 'antd';

interface optionsType {
  value: string | number;
  label: string | number;
  key?: string | number;
}

interface MultiTreeSelectPropsType {
  options: Array<optionsType>;
  className?: string;
}

const MultiTreeSelect: FC<MultiTreeSelectPropsType> = (props: MultiTreeSelectPropsType) => {
  const { options } = props;
  return (
    <>
      <TreeSelect
        className={props.className}
        showSearch
        treeCheckable={true}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder='Please select'
        allowClear
        multiple
        treeDefaultExpandAll
      >
        {options.map(item => {
          return <TreeSelect.TreeNode key={item.key || item.value} value={item.value} title={item.label} />;
        })}
      </TreeSelect>
    </>
  );
};
export default MultiTreeSelect;
