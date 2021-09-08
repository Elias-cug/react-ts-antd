import React, { useState, FC } from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/index';
import './style/index.less';

type VT = string | string[] | number | number[];
interface MultiSelectProps extends SelectProps<VT> {
  allowCreate?: boolean;
}

const defaultOptions = {
  allowCreate: false,
  showSearch: false,
  placeholder: '请选择'
};

// 合并自定义配置
function mergeOptions (defaultOptions: MultiSelectProps, customOptions: SelectProps<VT>): MultiSelectProps {
  const mergedOptions = {
    ...defaultOptions,
    ...customOptions
  };
  return mergedOptions;
}

function getMode (allowCreate: boolean, showSearch: boolean): 'tags' | 'multiple' {
  if (allowCreate) {
    return 'tags';
  } else if (!allowCreate && showSearch) {
    return 'multiple';
  } else if (!allowCreate && !showSearch) {
    return 'multiple';
  }
  return 'multiple';
}

const SuffixIcon: FC = () => {
  return (
    <>
      <i className='icon-select-arrow'></i>
      <i className='icon-search'></i>
    </>
  );
};

const ClearIcon: FC = () => {
  return <i className='icon-input-close'></i>;
};

const MaxTagPlaceholder: FC = props => {
  console.log(props);
  // const len = props?.length;
  // const str = len <= 99 ? '+' + len : '99+';
  return <div>{/* <i>{str}</i> */}</div>;
};

const MultiSelect: FC<Omit<MultiSelectProps, 'mode'>> = props => {
  // 合并配置
  const mergedOptions: MultiSelectProps = mergeOptions(defaultOptions, props);
  console.log('log---合并后的配置：');
  console.log(mergedOptions);

  const { allowCreate = false, showSearch = false, maxTagCount = 500 } = mergedOptions;

  // 处理 mode
  const mode = getMode(allowCreate, showSearch);

  // 备份删除 children
  let children: React.ReactNode;
  if (mergedOptions.children) {
    children = mergedOptions.children;
    delete mergedOptions.children;
  }

  // 删除 allowCreate
  delete mergedOptions.allowCreate;

  // 监听展开下拉的回调
  const onDropdownVisibleChange = function (open: boolean) {
    if (open) {
      setMaxTagCount(maxTagCount);
    } else {
      setMaxTagCount(1);
      console.log('props----');
      console.log(props);
    }
    if (mergedOptions.onDropdownVisibleChange) {
      mergedOptions.onDropdownVisibleChange(open);
    }
  };

  // 处理 maxTagCount：实现收起的时候只展示一行
  const [maxTagCountState, setMaxTagCount] = useState<number | 'responsive'>(1);

  return (
    <>
      <Select
        {...mergedOptions}
        className={`br-multi-select`}
        mode={mode}
        maxTagCount={maxTagCountState}
        showArrow={true}
        allowClear={true}
        suffixIcon={SuffixIcon}
        clearIcon={ClearIcon}
        maxTagPlaceholder={MaxTagPlaceholder}
        onDropdownVisibleChange={onDropdownVisibleChange}
      >
        {children}
      </Select>
    </>
  );
};

export default MultiSelect;
